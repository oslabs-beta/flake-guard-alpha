// @ts-nocheck
import { useLocation } from 'react-router-dom';
import MenuSidebar from "../../components/Sidebar";

const History: React.FC = () => {
  const location = useLocation();
  const {results} = location.state || {};
  console.log('HISTORY RESULTS---->', results);

  return (
    <div className="dashboard-container">
      <div>
        <MenuSidebar />
      </div>
      <div className="dashboard-content">
        <h1>History</h1>
      </div>
    </div>
  )
}

export default History;