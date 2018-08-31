var Square = props => (
  <div>
    <div
      onClick={() => props.handleColumnClick(props.y)}
      className={"square" + props.squareState}
      id={`${props.x},${props.y}`}
    >
      Square component
    </div>
  </div>
);

export default Square;
