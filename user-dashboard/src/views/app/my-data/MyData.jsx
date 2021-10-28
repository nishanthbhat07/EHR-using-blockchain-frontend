import React from "react";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import { Separator } from "../../../components/common/Separator";
import { Fade, FadeTransform, Transform } from "react-animation-components";
class MyData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <FadeTransform
        in
        transformProps={{
          exitTransform: "scale(0.5) translateY(-50%)",
        }}
      >
        <Row>
          <Col xs={6}>
            <Card
              className="d-flex flex-row mb-4 my-data-card"
              onClick={() => this.props.history.push("/app/user-on-boarding")}
            >
              <div>
                Complete Your Details <i className="fas fa-arrow-right" />
              </div>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Card className="d-flex flex-row mb-4">
              <div className="d-flex flex-grow-1 min-width-zero">
                <CardBody>
                  <CardHeader>My Data</CardHeader>
                  <Separator className="mb-5" />
                </CardBody>
              </div>
            </Card>
          </Col>
        </Row>
      </FadeTransform>
    );
  }
}
export default MyData;
