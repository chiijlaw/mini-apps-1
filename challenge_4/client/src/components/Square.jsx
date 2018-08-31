var Square = props => (
  <div>
    <div
      onClick={() => props.handleColumnClick(props.y)}
      className={`${"square" + props.squareState} square`}
      id={`${props.x},${props.y}`}
    >
      <span className={`dot ${"dot" + props.squareState}`} />
    </div>
  </div>
);

export default Square;
