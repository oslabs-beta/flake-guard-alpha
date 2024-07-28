import FlakeRiskSign from './FlakeRiskSign';
import '../../styles/riskSign.css';

const FlakeRiskContainer = (): JSX.Element => {
  return (
    <div className="flakeRiskContainer">
      <h1>FLAKE DANGER TODAY</h1>
      <FlakeRiskSign />
      <h2>
        ONLY <em>YOU</em> CAN PREVENT FLAKY TESTS
      </h2>
    </div>
  );
};

export default FlakeRiskContainer;
