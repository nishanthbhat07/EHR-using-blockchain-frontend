import React from "react";
import { Row, Col } from "reactstrap";
import HomePageImage from "./HomePageImage.js";

const HomePage = () => {
  return (
    <Row>
      <Col xs={12} md={12} lg={8}>
        <div className="landing-page-left">
          <HomePageImage />
        </div>
      </Col>
      <Col xs={4} className="landing-page-right">
        <h1>EHR of the Future</h1>
      </Col>
    </Row>
  );
};
export default HomePage;
