import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {supabaseClient} from '../../supabaseClient';
import signout from '../../assets/signout.png';
import github from '../../assets/github-mark-white.png';

interface User {
  email: string;
  profile: string;
}

const LoginButton: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    checkUser();
    window.addEventListener('hashchange', () => {
      checkUser();
    });
  }, []);

  async function checkUser() {
    try {
      const {data, error} = await supabaseClient.auth.getUser();
      if (!error && data.user) {
        console.log('USER DATA --->', data.user);

        setUser({
          email: data.user.user_metadata.user_name,
          profile: data.user.user_metadata.avatar_url,
        });
      } else {
        setUser(null);
      }
      setAuthChecked(true);
    } catch (error) {
      console.error('Error fetching user:', error);
      setUser(null);
    }
  }

  async function signInWithGithub() {
    try {
      await supabaseClient.auth.signInWithOAuth({
        provider: 'github',
      });
    } catch (error) {
      console.error('Error signing in: ', error);
    }
  }

  async function signOut() {
    await supabaseClient.auth.signOut();
    setUser(null);
  }

  if (user && authChecked) {
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
  } else if (authChecked) {
    return (
      <div className="login-btn">
        <button className="loginButton" onClick={signInWithGithub}>
          <img src={github} alt="github-logo" style={{width: '25px'}} />
          <span className="btn-text">Sign in with GitHub</span>
        </button>
      </div>
    );
  } else return <></>;
};

export default LoginButton;
