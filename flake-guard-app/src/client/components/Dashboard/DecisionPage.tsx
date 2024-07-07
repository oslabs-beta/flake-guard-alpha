import {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {supabaseClient} from '../../supabaseClient';

const DecisionPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkIfLoggedIn = async () => {
      try {
        const {data, error} = await supabaseClient.auth.getUser();
        if (data && !error) {
          console.log('USER --->', data);
          const url: string = `/dashboard/user/${data.user.id}`;
          navigate(url);
        }
      } catch (error) {
        console.error('Error checking user auth: ', error);
      }
    };
    checkIfLoggedIn();
  }, []);

  const {id} = useParams();

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
