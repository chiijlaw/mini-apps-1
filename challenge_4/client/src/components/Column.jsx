import Square from "./Square.jsx";
var Column = props => (
  <div>
    <div className="column">
      <ul>
        {props.numbers.map(number => (
          <Square
            key={number}
            y={props.y}
            x={number}
            squareState={props.columnState[number]}
            handleColumnClick={props.handleColumnClick.bind(
              null,
              props.yColumn
            )}
          />
        ))}
      </ul>
    </div>
  </div>
);

export default Column;
