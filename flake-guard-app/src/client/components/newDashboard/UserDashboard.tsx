import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Bar from './Bar';
import Calendar from './Calendar';
import { api } from '../../services/index';

interface UserResults {
  id: string;
  created_at: string;
  results: any[]; // Adjust this based on your actual data structure
  user_id: string;
}

interface CalendarData {
  day: string;
  value: number;
}

const UserDashboard: React.FC = () => {
  const [userResults, setUserResults] = useState<UserResults[]>([]);
  const { userId } = useParams<{ userId: string }>(); // Specify useParams type

  useEffect(() => {
    const getResults = async () => {
      try {
        const response = await api.get<UserResults[]>(`/userDash/${userId}`);
        setUserResults(response.data);
        console.log('ALL SAVED RESULTS FOR USER----->', response.data);
      } catch (error) {
        console.error('Error getting results: ', error);
      }
    };
    getResults();
  }, [userId]); // Add userId to dependency array

  console.log('LINE 25', userResults);

  const calendarData: CalendarData[] = [
    { day: '2023-01-01', value: 5 },
    { day: '2023-01-02', value: 10 },
    { day: '2023-01-03', value: 3 },
    // Add more data entries as needed
  ];
  
  return (
    <div>
      <h1>USER DASHBOARD</h1>
      <Bar />
      <Calendar calendarData={calendarData} />
    </div>
  );
};

export default UserDashboard;
