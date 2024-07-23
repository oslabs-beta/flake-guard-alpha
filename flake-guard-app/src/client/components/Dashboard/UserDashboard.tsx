import {useEffect, useState} from 'react';
import {api} from '../../services/index';
import {useParams} from 'react-router-dom';

const UserDashboard: React.FC = () => {
  const {userId} = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const getResults = async () => {
      try {
        const results = await api.get(`/userDash/${userId}`);
        const resultsArray = results.data;
        // add a yyyy-mm-dd date to each result
        for (const result of resultsArray) {
          const ts = result.created_at;
          result.date = ts.slice(0, ts.indexOf('T'));
        }
        console.log('RESULTS USERDASH', results, resultsArray)
        setResults(resultsArray);
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
