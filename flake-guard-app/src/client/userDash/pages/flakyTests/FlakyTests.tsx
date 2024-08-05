// @ts-nocheck
import MenuSidebar from "../../components/Sidebar";
import { useContext } from "react";
import {ResultsContext} from '../../contexts/ResultContext'

const FlakyTests: React.FC = () => {
    const results = useContext(ResultsContext); // Access context value correctly

    console.log('FLAKY TESTS COMPONENT', results);

    return (
        <div className="dashboard-container">
            <div>
                <MenuSidebar />
            </div>
            <div className="dashboard-content">
                <h1>Flaky Tests</h1>
            </div>
        </div>
    );
}

export default FlakyTests;
