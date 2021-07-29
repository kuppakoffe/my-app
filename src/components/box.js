import React from "react";
import { Col } from "antd";

const Box = ({ data, currentPos }) => {
  return (
    <React.Fragment>
      {data.map((idx) => (
        <Col className={idx === currentPos ? "box pos" : "box"} key={idx}>
          {idx}
        </Col>
      ))}
    </React.Fragment>
  );
};

export default Box;
