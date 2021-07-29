import React from "react";
import { Button } from "antd";

import { Col } from "antd";

const Dice = ({ handleDiceOutCome, currentPos }) => {
  const [number, setNumber] = React.useState(0);
  const rollDice = () => {
    const res = Math.floor(Math.random() * 6) + 1;
    handleDiceOutCome(res);
    setNumber(res);
    // setNumber(res + currentPos);
  };
  return (
    <React.Fragment>
      <Col className="dice">
        <Button type="default" onClick={rollDice}>
          Roll it!
        </Button>
      </Col>
      <Col className="dice">Rolled : {number}</Col>
      <Col className="dice">currentPos: {currentPos}</Col>
    </React.Fragment>
  );
};

export default Dice;
