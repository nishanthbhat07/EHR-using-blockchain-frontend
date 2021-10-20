import React from "react";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import { Separator } from "../../../components/common/Separator";

class MyPrescriptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Row>
        <Col xs={12}>
          <Card className="d-flex flex-row mb-4">
            <div className="d-flex flex-grow-1 min-width-zero">
              <CardBody>
                <CardHeader
                  style={{ fontSize: 24, marginTop: 15, background: "inherit" }}
                >
                  My Prescriptions
                </CardHeader>
                <Separator className="mb-5" />
              </CardBody>
            </div>
          </Card>
        </Col>
      </Row>
    );
  }
}
export default MyPrescriptions;
