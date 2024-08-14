import FlakeRiskSign from './FlakeRiskSign';
import '../../styles/riskSign.css';

interface FlakeRiskContainerProps {
  flakePercent: number | undefined
}

const FlakeRiskContainer: React.FC<FlakeRiskContainerProps> = ({flakePercent}): JSX.Element => {
  return (
    <div className="flakeRiskContainer">
      <h1>FLAKE DANGER TODAY</h1>
      <FlakeRiskSign flakePercent={flakePercent}/>
      <h2>
        ONLY <em>YOU</em> CAN PREVENT FLAKY TESTS
      </h2>
    </div>
  );
};

export default FlakeRiskContainer;
