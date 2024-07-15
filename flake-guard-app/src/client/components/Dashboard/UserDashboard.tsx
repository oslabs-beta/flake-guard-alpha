import {useEffect} from 'react';
import {api} from '../../services/index';
import {useParams} from 'react-router-dom';

const UserDashboard: React.FC = () => {
  const {userId} = useParams();

  useEffect(() => {
    const getResults = async () => {
      try {
        const results = await api.get(`/userDash/${userId}`);
        console.log('ALL SAVED RESULTS FOR USER----->', results.data);
      } catch (error) {
        console.log('Error getting results: ', error);
      }
    };
    getResults();
  }, []);

  return (
    <div>
      <h1>USER DASHBOARD</h1>
    </div>
  );
};

export default UserDashboard;
