import React from "react";
import { Row, Col, Card, CardHeader, CardBody, Button } from "reactstrap";
import { Separator } from "../../../components/common/Separator";
import { PDFReader } from "reactjs-pdf-reader";

const prescription_data = [
  {
    id: 0,
    doctor_name: "Dr. ABC",
    prescription_date: new Date().toLocaleDateString("en-IN"),
    prescription_name: "Fever",
    prescription_url: "https://hackrx-tier4.s3.ap-south-1.amazonaws.com/na.pdf",
  },
  {
    id: 1,
    doctor_name: "Dr. ABC",
    prescription_date: new Date().toLocaleDateString("en-IN"),
    prescription_name: "Stomach Ache",
    prescription_url: "https://hackrx-tier4.s3.ap-south-1.amazonaws.com/na.pdf",
  },
  {
    id: 2,
    doctor_name: "Dr. ABC",
    prescription_date: new Date().toLocaleDateString("en-IN"),
    prescription_name: "Skin",
    prescription_url: "https://hackrx-tier4.s3.ap-south-1.amazonaws.com/na.pdf",
  },
  {
    id: 3,
    doctor_name: "Dr. ABC",
    prescription_date: new Date().toLocaleDateString("en-IN"),
    prescription_name: "Hair",
    prescription_url: "https://hackrx-tier4.s3.ap-south-1.amazonaws.com/na.pdf",
  },
];
class MyPrescriptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr_of_prescriptions: prescription_data,
    };
  }

  render() {
    return (
      <Row>
        <Col xs={6}>
          <Card className="d-flex flex-row mb-4">
            <div className="d-flex flex-grow-1 min-width-zero">
              <CardBody>
                <CardHeader
                  style={{ fontSize: 24, marginTop: 15, background: "inherit" }}
                >
                  My Prescriptions
                </CardHeader>
                <Separator className="mb-5" />

                <div className="render_prescription">
                  <Row>
                    <Col xs={4} className="prescription_title">
                      Consulted by
                    </Col>
                    <Col xs={4} className="prescription_title">
                      Date
                    </Col>
                    <Col xs={4} className="prescription_title">
                      Prescription
                    </Col>
                  </Row>
                  {this.state.arr_of_prescriptions.map((item, index) => (
                    <RenderPrescription
                      item={item}
                      key={index}
                      history={this.props.history}
                    />
                  ))}
                </div>
              </CardBody>
            </div>
          </Card>
        </Col>
        <Col xs={6}>
          <Card className="d-flex flex-row mb-4">
            <div className="d-flex flex-grow-1 min-width-zero">
              <CardBody>
                <CardHeader
                  style={{ fontSize: 24, marginTop: 15, background: "inherit" }}
                >
                  Prescription
                </CardHeader>
                <Separator className="mb-5" />

                <PDFReader
                  width={500}
                  url={
                    "https://hackrx-tier4.s3.ap-south-1.amazonaws.com/na.pdf"
                  }
                />
              </CardBody>
            </div>
          </Card>
        </Col>
      </Row>
    );
  }
}
export default MyPrescriptions;
const RenderPrescription = ({ item, key, history }) => (
  <Row className="prescription_row">
    <Col xs={4}>
      <span className="doctor_name">{item.doctor_name}</span>
    </Col>
    <Col xs={4}>
      <span className="prescription_date">{item.prescription_date}</span>
    </Col>
    <Col xs={4}>
      <Button
        onClick={() => history.push(item.prescription_url)}
        className="btn btn-multiple-state prescription_button"
      >
        Load Prescription
      </Button>
    </Col>
  </Row>
);
