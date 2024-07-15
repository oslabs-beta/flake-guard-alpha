import {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {supabaseClient} from '../../supabaseClient';
import {api} from '../../services/index';

const DecisionPage: React.FC = () => {
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
  }, []);

  const goToTemp = (): void => {
    navigate(`/tempdashboard/${id}`);
  };

  return (
    <div>
      <button>Login w/ Github if you're cool</button>
      <button onClick={() => goToTemp()}>View temp dash if you're lame</button>
    </div>
  );
};

export default DecisionPage;
