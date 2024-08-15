// @ts-nocheck
import { useLocation } from 'react-router-dom';
import MenuSidebar from "../../components/Sidebar";
import { useContext } from "react";
import {ResultsContext} from '../../contexts/ResultContext'



const CodeCoverage: React.FC = () => {
  const results = useContext(ResultsContext); // Access context value correctly

  return (
    <div className="dashboard-container">
      <div>
        <MenuSidebar />
      </div>
      <div className="dashboard-content">
        <h1>Coverage feature in development</h1>
        <h1>Check back soon!</h1>
      </div>
    </div>
  )
}

export default CodeCoverage;