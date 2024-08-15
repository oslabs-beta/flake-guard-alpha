//@ts-nocheck
import MenuSidebar from "../../components/Sidebar";
import { useContext, useState, useEffect } from "react";
import { ResultsContext } from '../../contexts/ResultContext';
import PieChart from "../../components/pie/PieChart";
import BarChart from "../../components/bar/BarChart";
import {barChartParser} from '../../../utilities/barchartDataParser'

const FlakyTests: React.FC = () => {
    const results = useContext(ResultsContext); 
    const [barChartData, setBarChartData] = useState([]);

    useEffect(() => {
        const chartData = barChartParser(results);
        const latestRun = chartData.slice(-3); //Display the last 20 runs
        // console.log('Parsed BAR Chart Data:', latestRun);
        if (Array.isArray(latestRun)) setBarChartData(latestRun);
    }, [results]);


    console.log('barChartData', barChartData)
    return (
      <div className="dashboard-container">
          <div>
              <MenuSidebar />
          </div>
        <div className="dashboard-content">
          <h1>In-Depth Details about Flaky Tests Feature</h1>
          <h1>Check back soon!</h1>
        </div>
      </div>
  );
}

export default FlakyTests;
