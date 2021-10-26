import React from "react";
import { Row, Col, Card, Button, CardBody } from "reactstrap";
import { Separator } from "../../../components/common/Separator";

const permissions_data = [
  {
    id: 0,
    doctor_name: "Dr. ABC",
    prescription_date: new Date().toLocaleDateString("en-IN"),
    prescription_name: "Fever",
    prescription_url:
      "https://ipfs.io/ipfs/QmaKsAAGGrbdC5RwBj7Pq1LhGbgwjhnp5n6keRD4DdCeMe",
    hash: "QmaKsAAGGrbdC5RwBj7Pq1LhGbgwjhnp5n6keRD4DdCeMe",
    purpose:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: 1,
    doctor_name: "Dr. ABC",
    prescription_date: new Date().toLocaleDateString("en-IN"),
    prescription_name: "Stomach Ache",
    prescription_url: "https://hackrx-tier4.s3.ap-south-1.amazonaws.com/na.pdf",
    purpose: "TP",
  },
  {
    id: 2,
    doctor_name: "Dr. ABC",
    prescription_date: new Date().toLocaleDateString("en-IN"),
    prescription_name: "Skin",
    prescription_url: "https://hackrx-tier4.s3.ap-south-1.amazonaws.com/na.pdf",
    purpose: "TP",
  },
  {
    id: 3,
    doctor_name: "Dr. ABC",
    prescription_date: new Date().toLocaleDateString("en-IN"),
    prescription_name: "Hair",
    prescription_url: "https://hackrx-tier4.s3.ap-south-1.amazonaws.com/na.pdf",
    purpose: "TP",
  },
];

class MyPermission extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      permissions_data: permissions_data,
    };
  }
  render() {
    return (
      <Row>
        <Col xs={12}>
          <Card className="d-flex flex-row mb-4">
            <div className="d-flex flex-grow-1 min-width-zero">
              <CardBody>
                <Row className="row_header">
                  <Col lg={{ size: 3 }} xs={4} className="permission_header">
                    Doctor Name
                  </Col>
                  <Col lg={4} xs={4} className="permission_header">
                    Purpose
                  </Col>
                  <Col lg={3} xs={4} className="permission_header">
                    Date
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    {this.state.permissions_data.map((item, index) => (
                      <RenderPermissions key={index} item={item} />
                    ))}
                  </Col>
                </Row>
              </CardBody>
            </div>
          </Card>
        </Col>
      </Row>
    );
  }
}
export default MyPermission;
const RenderPermissions = ({ key, item }) => (
  <>
    <Row className="row-permission">
      <Col lg={{ size: 3 }} xs={4} className="permission_title">
        {item.doctor_name}
      </Col>
      <Col lg={4} xs={4} className="permission_purpose">
        {item.purpose}
      </Col>
      <Col lg={3} xs={4} className="permission_title">
        {item.prescription_date}
      </Col>
      <Col xs={6} md={6} lg={1} className="permission_button_container">
        <Button
          onClick={() => console.log("Access Granted")}
          className="btn btn-multiple-state  permission_button"
        >
          <i class="fas fa-check-circle fa-2x" />
        </Button>
      </Col>
      <Col xs={6} md={6} lg={1} className="permission_button_container">
        <Button
          onClick={() => console.log("revoked access")}
          className="btn btn-multiple-state  permission_button"
        >
          <i class="far fa-times-circle fa-2x" />
        </Button>
      </Col>
    </Row>
    <Separator className="mb-5" />
  </>
);
