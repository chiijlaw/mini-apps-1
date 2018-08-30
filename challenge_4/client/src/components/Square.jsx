var Square = props => (
  <div>
    <div
      onClick={props.handleColumnClick}
      className={"square" + props.squareState}
    >
      Square component
    </div>
  </div>
);

export default Square;
