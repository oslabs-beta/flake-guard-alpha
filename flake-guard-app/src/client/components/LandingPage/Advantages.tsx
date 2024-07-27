import React from 'react';
import '../../../styles/advantages.css';
import advantage1 from '../../assets/advantage1.png';
import advantage2 from '../../assets/advantage2.png';
import advantage3 from '../../assets/advantage3.png';
import advantage4 from '../../assets/advantage4.png';

const Advantages = (): JSX.Element => {
  return (
    <div className="advantages-container">
      <div className="advantage" id="advantage-div">
        <img src={advantage1} alt="advantage1" />
        <h5>Improved Test Reliability</h5>
        <p>
          By identifying flaky tests, Flake Guard helps developers resolve
          inconsistencies, leading to more reliable and trustworthy test suites.
        </p>
      </div>
      <div className="advantage">
        <img src={advantage2} alt="advantage2" />
        <h5>Enhanced Developer Productivity</h5>
        <p data-testid ="paragraph1">
          Detecting and fixing flaky tests saves troubleshooting time, letting
          developers focus on writing quality code.
        </p>
      </div>
      <div className="advantage">
        <img src={advantage3} alt="advantage3" />
        <h5>Increased Confidence in Software Releases</h5>
        <p data-testid ="paragraph2">
          With fewer flaky tests, teams can be more confident in the results of
          their test suites, ensuring that only stable and well-tested code is
          released to production.
        </p>
      </div>
      <div className="advantage">
        <img src={advantage4} alt="advantage4" />
        <h5>Faster Continuous Integration (CI) Pipelines</h5>
        <p data-testid ="paragraph3">
          Reducing flaky tests minimizes false negatives in CI pipelines,
          resulting in smoother, faster processes, and accelerating development
          cycles.
        </p>
      </div>
    </div>
  );
};

export default Advantages;
