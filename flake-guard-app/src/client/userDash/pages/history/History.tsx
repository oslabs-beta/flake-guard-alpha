// @ts-nocheck
import MenuSidebar from "../../components/Sidebar";



const History: React.FC = ({results}) => {


  return (
    <div className="dashboard-container">
      <div>
        <MenuSidebar />
      </div>
      <div className="dashboard-content">
        <h1>History</h1>
        {results}
      </div>
    </div>
  )
}

export default History;