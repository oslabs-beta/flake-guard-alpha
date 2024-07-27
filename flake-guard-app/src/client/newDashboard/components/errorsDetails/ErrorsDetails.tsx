// @ts-nocheck

import React, {useState, useEffect} from "react";
import '../../../../styles/dashboard/newDashboard.css'
import {displayErrosDataParser} from '../../../utilities/displayErrorsDataParser'
import Accordion from 'react-bootstrap/Accordion';

const ErrorsDetails: React.FC = ({results}) => {
    const [errorsDetails, setErrorsDetails] = useState([])
    const [metrics, setMetrics] = useState([]);

    useEffect(() => {
        const chartData = displayErrosDataParser(results);
        const latestRun = chartData.slice(-1); //Display the latest run
        // console.log('chartData', chartData)
       if (latestRun.length > 0) {
        const latestRunMetrics = latestRun[0]
        setMetrics(latestRunMetrics.details)
       }
        if (Array.isArray(latestRun)) setErrorsDetails(latestRun);
    }, [results]);

    // console.log('details', errorsDetails, metrics)
    

    return (
        <Accordion className="accordion-scrollable">
        {metrics && metrics.map((test, index) => (
            <Accordion.Item eventKey={index} key={index}>
                <Accordion.Header>AssertionError: {test.fullName} </Accordion.Header>
                    <Accordion.Body>
                        <div key={index}>
                            <p>ID: {errorsDetails[0].id}</p>
                            <p>Failed: {test.failed} out of {test.totalRuns} runs</p>
                            <p>Passed: {test.passed} out of {test.totalRuns} runs</p>
                            <p>file: {errorsDetails[0].filePath}</p>
                        </div>
                    </Accordion.Body>
            </Accordion.Item>
        ))}
    </Accordion>
    )
}

export default ErrorsDetails;
