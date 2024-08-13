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
            <h1>Flaky Tests</h1>
            <div className="dashboard-content">  {/* Should i change the name?*/}
                <div
                className="piechart-graph "
                style={{height: '310px', width: '100%'}}
                >
                <PieChart results={results} />
                </div>
            </div>
            <div className="barchart-container">
            <div
              className="barchart-graph graph-style"
              style={{height: '350px', width: '99%'}}
            >
              <BarChart barChartData={barChartData}/>
            </div>
          </div>
        </div>
    );
}

export default FlakyTests;
