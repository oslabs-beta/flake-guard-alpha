import FlakeRiskSlice from './FlakeRiskSlice';
import FlakeRiskArrow from './FlakeRiskArrow';

interface FlakeRiskSignProps {
  flakePercent: number | undefined
}

const FlakeRiskSign: React.FC<FlakeRiskSignProps> = ({flakePercent}): JSX.Element => {
  return (
    <div className="flakeRiskSign">
      <FlakeRiskSlice color={'green'} text={'LOW'} />
      <FlakeRiskSlice color={'blue'} text={'MODERATE'} />
      <FlakeRiskSlice color={'yellow'} text={'HIGH'} />
      <FlakeRiskSlice color={'orange'} text={'VERY HIGH'} />
      <FlakeRiskSlice color={'red'} text={'EXTREME'} />
      <FlakeRiskArrow flakePercent={flakePercent}/>
    </div>
  );
};

export default FlakeRiskSign;
