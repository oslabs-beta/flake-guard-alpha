import {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {supabaseClient} from '../../supabaseClient';
import {api} from '../../services/index';
import LoginButton from '../Login/LoginButton';
import NavBarHeading from '../nav-bar';

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
        console.error('Error checking user auth: ', error);
      }
    };
    checkIfLoggedIn();
  }, [loggedIn]);

  const goToTemp = (): void => {
    navigate(`/tempdashboard/${id}`);
  };

  return (
    <div>
      <NavBarHeading />
      <LoginButton setLoggedIn={setLoggedIn} />
      <button onClick={() => goToTemp()}>View temp dash if you're lame</button>
    </div>
  );
};

export default DecisionPage;
