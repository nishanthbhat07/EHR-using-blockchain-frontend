import React, { Fragment } from "react";
import { Row, Col, Card, Button, CardHeader, CardBody } from "reactstrap";
import { Separator } from "../../../components/common/Separator";
import UploadMedical from "./UploadMedicals";
import { Helmet } from "react-helmet";
import { Fade, FadeTransform, Stagger } from "react-animation-components";
const my_patients = [
  {
    id: "1",
    name: "Aakash Mukhtar",
    email: "aakashm@gmail.com",
    gender: "M",
    dob: "12/05/1999",
  },
  {
    id: "2",
    name: "Prakash Ahuja",
    email: "prakash.ahuja@yahoo.com",
    gender: "M",
    dob: "16/02/1998",
  },
  {
    id: "3",
    name: "Dharya Dhavale",
    email: "dharyadhavale@gmail.com",
    gender: "M",
    dob: "02/01/2000",
  },
];
class ViewPatients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      my_patients: my_patients,
      isOpen: false,
    };
    this.showModal = this.showModal.bind(this);
  }
  showModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>My Patients</title>
        </Helmet>
        <FadeTransform
          in
          transformProps={{
            exitTransform: "scale(0.5) translateY(-50%)",
          }}
        >
          <Row className="mt-3">
            <Col xs={12}>
              <Card className="d-flex flex-row mb-4">
                <div className="d-flex flex-grow-1 min-width-zero">
                  <CardBody>
                    <CardHeader>My Patients</CardHeader>
                    <Separator className="mb-5" />
                    <Row className="row_header">
                      <Col xs={3} className="permission_header">
                        Name
                      </Col>
                      <Col xs={3} className="permission_header">
                        Gender
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12}>
                        <Stagger in>
                          {this.state.my_patients.map((item, index) => (
                            <RenderPatients
                              item={item}
                              index={index}
                              showModal={this.showModal}
                            />
                          ))}
                        </Stagger>
                      </Col>
                    </Row>
                  </CardBody>
                </div>
              </Card>
            </Col>
          </Row>
        </FadeTransform>
        <UploadMedical isOpen={this.state.isOpen} showModal={this.showModal} />
      </Fragment>
    );
  }
}

export default ViewPatients;
const RenderPatients = ({ item, index, showModal }) => (
  <Fade in>
    <React.Fragment key={index}>
      <Row className="row-permission">
        <Col xs={3} className="permission_title">
          {item.name}
        </Col>

        <Col xs={3} className="permission_title">
          {item.gender}
        </Col>

        <Col lg={3} className="permission_button_container">
          <Button
            size="lg"
            onClick={showModal}
            className="btn btn-multiple-state  permission_button"
          >
            Upload Prescription
          </Button>
        </Col>
        <Col lg={3} className="permission_button_container">
          <Button
            size="lg"
            onClick={showModal}
            className="btn btn-multiple-state  permission_button"
          >
            Upload Reports
          </Button>
        </Col>
      </Row>
      <Separator className="mb-5" />
    </React.Fragment>
  </Fade>
);
