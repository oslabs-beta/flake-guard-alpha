import React, { useState, useEffect, createContext } from 'react';
import { useParams } from 'react-router-dom'; 
import { api } from '../../services/index';

// Create the context
export const ResultsContext = createContext<any[]>([]);

const ResultsProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const { userId } = useParams(); 
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    const getResults = async () => {
      try {
        const response = await api.get(`/userDash/${userId}`);
        const resultsArray = response.data;

        // Add a yyyy-mm-dd date to each result
        for (const result of resultsArray) {
          const ts = result.created_at;
          result.date = ts.slice(0, ts.indexOf('T'));
        }
        // console.log('RESULTS USERDASH CONTEXT --->', resultsArray);
        setResults(resultsArray);
      } catch (error) {
        console.log('Error getting results: ', error);
      }
    };

    getResults();
  }, [userId]);

  return (
    <ResultsContext.Provider value={results}>
      {children} 
    </ResultsContext.Provider>
  );
};

export default ResultsProvider;
