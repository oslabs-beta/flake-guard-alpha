import {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {supabaseClient} from '../supabaseClient';
import {api} from '../services/index';
import github from '../assets/github-mark-white.png';
import FlakeRiskContainer from '../flakeRiskSign/FlakeRiskSign/FlakeRiskContainer';
import {calculateFlakePercentage} from '../flakeRiskSign/Analytics/flake-percentage';
import logo from '../assets/logo.png';
import '../styles/decisionPage.css'
import LoginButton from '../landingPage/components/LoginButton';

const DecisionPage: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  const [flakePercent, setFlakePercent] = useState<number | undefined>(undefined);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await api.get(`/tempDash/${id}`);
        const results = response.data;
        const flakePercentage = calculateFlakePercentage(results); 
        setFlakePercent(flakePercentage);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMetrics();
  }, []); 

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
    <>
      <img
        className="decisionLogo"
        src={logo}
        alt="flakeguard-logo"
      />
      <div className="decisionContainer">
        <h1 className="info-text">To view detailed metrics and save your results:</h1>
        <div className="login-btn decisionLogin">
          <button className="loginButton desicionButton" onClick={signIn}>
            <img src={github} alt="github-logo" style={{width: '25px'}}/>
            <span className="btn-text">Sign in with GitHub</span>
          </button>
        </div>
        <div className="flake-risk-container">
          <FlakeRiskContainer flakePercent={flakePercent} />
        </div>
        <h3 className="temp-text">To view a temporary dashboard without signing in:</h3>
        <button className="npm-button temp-button" onClick={() => goToTemp()} style={{width: '100px'}}>
          <span className="btn-text">Click here</span>
        </button>
      </div>
    </>
  );
};

export default DecisionPage;
