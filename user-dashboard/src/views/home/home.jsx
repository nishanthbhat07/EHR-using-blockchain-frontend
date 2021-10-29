import React from "react";
import { Row, Col } from "reactstrap";
import HomePageImage from "./HomePageImage.js";
import { Helmet } from "react-helmet";
const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Row>
        <Col xs={12} md={12} lg={8}>
          <div className="landing-page-left">
            <HomePageImage />
          </div>
        </Col>
        <Col xs={4}>
          <div className="landing-page-right">
            <span>EHR of the Future</span>
            <span className="subtitle">
              Store all medical records at one place.
            </span>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default HomePage;
