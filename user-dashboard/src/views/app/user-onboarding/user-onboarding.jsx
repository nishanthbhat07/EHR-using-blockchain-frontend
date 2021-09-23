import React from "react";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import { Separator } from "../../../components/common/Separator";

import UserOnBoardingCard from "../../../components/cards/UserOnBoardingCard";

class UserOnBoarding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Row>
        <Col xs={12} md={4} lg={6}>
          <Card className="d-flex flex-row mb-4">
            <div className="d-flex flex-grow-1 min-width-zero">
              <CardBody className=" pl-0 align-self-center  flex-sm-row pl-3">
                <CardHeader style={{ fontSize: 24, marginTop: 15 }}>
                  Side
                </CardHeader>
                <Separator className="mb-5" />
                <div className="justify-content-center pl-3 ml-3">
                  <div>HELLO</div>
                </div>
              </CardBody>
            </div>
          </Card>
        </Col>
        <Col xs={12} md={8} lg={6}>
          <UserOnBoardingCard />
        </Col>
      </Row>
    );
  }
}
export default UserOnBoarding;
