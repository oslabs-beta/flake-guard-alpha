import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {supabaseClient} from '../../supabaseClient';
import github from '../../assets/github-mark-white.png';
import signout from '../../assets/signout.png';

interface User {
  email: string;
  profile: string;
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
        console.log(data.user.user_metadata.avatar_url);

        setUser({
          email: data.user.user_metadata.user_name,
          profile: data.user.user_metadata.avatar_url,
        });
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
      <div className="btn-group">
        <button
          type="button"
          className="btn dropdown-toggle"
          data-bs-toggle="dropdown"
        >
          <img
            src={user.profile}
            alt="user-profile-pic"
            style={{width: '40px', borderRadius: '50%'}}
          />
        </button>
        <ul className="dropdown-menu">
          <li>
            <b id="logged-greeting">{user.email}</b>
          </li>
          <li>
            <Link
              to="/"
              onClick={signOut}
              className="btn-signout"
              id="sign-out-button"
            >
              <img src={signout} alt="signout-icon" style={{width: '16px'}} />
              <span className="btn-text-signout">Sign out</span>
            </Link>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="login-btn">
        <button className="loginButton" onClick={signInWithGithub}>
          <img src={github} alt="github-logo" style={{width: '25px'}} />
          <span className="btn-text">Sign in with GitHub</span>
        </button>
      </div>
    );
  }
};

//

export default LoginButton;
