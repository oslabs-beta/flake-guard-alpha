interface SliceProps {
  color: string;
  text: string;
}

const FlakeRiskSlice = (props: SliceProps): JSX.Element => {
  return (
    <div className="flakeRiskSlice" style={{backgroundColor: props.color}}>
      <h3 style={{backgroundColor: props.color}}>{props.text}</h3>
    </div>
  );
};

export default FlakeRiskSlice;
