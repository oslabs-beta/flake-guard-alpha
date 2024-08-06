import {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {supabaseClient} from '../supabaseClient';
import {api} from '../services/index';
import github from '../assets/github-mark-white.png';

const DecisionPage: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    const checkIfLoggedIn = async () => {
      try {
        const {data, error} = await supabaseClient.auth.getUser();

        if (data && !error) {
          // get results from cache and save to db
          const response = await api.get(`/results/${id}`);
          const results = response.data;
          await api.post(`/userDash/${data.user.id}`, {results});
          await api.delete(`/tempDash/${id}`);
          // route to user dashboard
          const url: string = `/dashboard/user/${data.user.id}`;
          navigate(url);
        }
      } catch (error) {
        console.error(
          'Error checking user auth or getting results from cache and saving to database: ',
          error
        );
      }
    };
    checkIfLoggedIn();
  }, [loggedIn]);

  const signIn = async () => {
    try {
      const signInResponse = await supabaseClient.auth.signInWithOAuth({
        provider: 'github',
        options: {redirectTo: `https://flakeguard.com/npm/${id}`},
      });
      console.log('SIGN IN RESPONSE------>', signInResponse);
      const {data, error} = await supabaseClient.auth.getUser();
      if (data.user && !error) setLoggedIn(true);
    } catch (error) {
      console.error('Error signing in: ', error);
    }
  };

  const goToTemp = (): void => {
    navigate(`/tempdashboard/${id}`);
  };

  return (
    <div>
      <div className="login-btn">
        <button className="loginButton" onClick={signIn}>
          <img src={github} alt="github-logo" style={{width: '25px'}} />
          <span className="btn-text">Sign in with GitHub</span>
        </button>
      </div>
      <button onClick={() => goToTemp()}>View temp dash if you're lame</button>
    </div>
  );
};

export default DecisionPage;
