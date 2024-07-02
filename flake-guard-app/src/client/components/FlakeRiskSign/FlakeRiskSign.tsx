import FlakeRiskSlice from './FlakeRiskSlice';
import FlakeRiskArrow from './FlakeRiskArrow';

const FlakeRiskSign = (): JSX.Element => {
  return (
    <div className="flakeRiskSign">
      <FlakeRiskSlice color={'green'} text={'LOW'} />
      <FlakeRiskSlice color={'blue'} text={'MODERATE'} />
      <FlakeRiskSlice color={'yellow'} text={'HIGH'} />
      <FlakeRiskSlice color={'orange'} text={'VERY HIGH'} />
      <FlakeRiskSlice color={'red'} text={'EXTREME'} />
      <FlakeRiskArrow />
    </div>
  );
};

export default FlakeRiskSign;
