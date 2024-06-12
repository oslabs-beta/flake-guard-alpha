import {useState, useEffect} from 'react';
import {supabaseClient} from '../../supabaseClient';

interface User {
  email: string;
}

const LoginButton: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    checkUser();
    window.addEventListener('hashchange', () => {
      checkUser();
    });
  }, []);

  async function checkUser() {
    try {
      const {data, error} = await supabaseClient.auth.getUser();
      if (data && !error && data.user && data.user.email) {
        console.log('data --->', data);
        setUser({email: data.user.user_metadata.user_name});
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error('Error fetching user:', error);
      setUser(null);
    }
  }

  async function signInWithGithub() {
    await supabaseClient.auth.signInWithOAuth({
      provider: 'github',
    });
  }

  async function signOut() {
    await supabaseClient.auth.signOut();
    setUser(null);
  }

  if (user) {
    return (
      <div>
        <h1>Hello, {user.email}</h1>
        <button onClick={signOut}>Sign out</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Hello, please sign in!</h1>
        <button onClick={signInWithGithub}>Sign In</button>
      </div>
    );
  }
};

//

export default LoginButton;
