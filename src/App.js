import "./styles.css";
import Box from "./components/box";
import Dice from "./components/dice";
import { Row } from "antd";
import React from "react";
import "antd/dist/antd.css";

const cols = [];
const points = {};
const mapping = {};
let idx = 1;
for (let i = 1; i <= 100; i++) {
  cols.push(parseInt(i, 10));

  if (!(idx in mapping)) {
    mapping[idx] = [];
  }

  mapping[idx].push(i);
  if (i % 10 === 0) {
    points[i] = 1;
    idx += 1;
  }
}

for (let i = 2; i <= 10; i++) {
  mapping[i] = mapping[i].reverse();
}

const App = () => {
  const [currentPos, setCurrentPos] = React.useState(1);
  // const [diceOutcome, setDiceOutCome] = React.useState(0);

  const handleDiceOutCome = (number) => {
    // setDiceOutCome(number);

    const _number = number + currentPos;
    if (_number > 100) {
      alert(`try again, you rolled ${_number}`);
    } else {
      setCurrentPos(number + currentPos);
    }

    // console.log({ currentPos });
  };
  return (
    <React.Fragment>
      {Object.keys(mapping)
        .reverse()
        .map((key) => (
          <Row key={key} className="row">
            <Box data={mapping[key]} currentPos={currentPos} />
          </Row>
        ))}

      <Row>
        <Dice handleDiceOutCome={handleDiceOutCome} currentPos={currentPos} />
      </Row>
    </React.Fragment>
  );
};

export default App;
