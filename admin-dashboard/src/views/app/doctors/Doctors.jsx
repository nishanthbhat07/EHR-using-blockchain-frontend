import React, { Fragment } from "react";
import { Row, Col, Card, CardHeader, CardBody, Button } from "reactstrap";
import { Separator } from "../../../components/common/Separator";
import { Fade, FadeTransform, Stagger } from "react-animation-components";
import { Helmet } from "react-helmet";

const doctors = [
  {
    id: "1",
    name: "Dr. Milind Kulkarni",
    role: "doctor",
    specialization: "Cardiologist",
    qualification: ["MBBS", "MD"],
    years_of_experience: "12",
  },
  {
    id: "2",
    name: "Dr. Abhijeet Baldota",
    role: "doctor",
    specialization: "General Physician",
    qualification: ["MBBS"],
    years_of_experience: "12",
  },
  {
    id: "3",
    name: "Dr. Amit Tungenwar",
    role: "doctor",
    specialization: "Oncologist",
    qualification: ["BDS", "MD"],
    years_of_experience: "13",
  },
  {
    id: "4",
    name: "Dr. Milind Kulkarni",
    role: "doctor",
    specialization: "General Surgeon",
    qualification: ["MBBS", "MD"],
    years_of_experience: "10",
  },
];

class Doctors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list_of_docs: doctors,
    };
  }
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Doctors</title>
        </Helmet>
        <FadeTransform
          in
          transformProps={{
            exitTransform: "scale(0.5) translateY(-50%)",
          }}
        >
          <Row>
            <Col xs={12}>
              <Card className="d-flex flex-row mb-4">
                <div className="d-flex flex-grow-1 min-width-zero">
                  <CardBody>
                    <CardHeader>List of Doctors</CardHeader>
                    <Separator className="mb-5" />
                    <Row className="row_header">
                      <Col xs={4} className="permission_header">
                        Name
                      </Col>
                      <Col xs={4} className="permission_header">
                        {" "}
                        Year of Experience
                      </Col>
                      <Col xs={4} className="permission_header">
                        Specialization
                      </Col>
                    </Row>
                    <Stagger in>
                      {this.state.list_of_docs.map((item, index) => (
                        <RenderDoctors item={item} index={index} />
                      ))}
                    </Stagger>
                  </CardBody>
                </div>
              </Card>
            </Col>
          </Row>
        </FadeTransform>
      </Fragment>
    );
  }
}
export default Doctors;

const RenderDoctors = ({ item, index }) => (
  <Fade in>
    <React.Fragment key={index}>
      <Row className="row-permission">
        <Col xs={4} className="permission_title">
          {item.name}
        </Col>
        <Col lg={4} xs={4} className="permission_purpose">
          {item.years_of_experience}
        </Col>
        <Col lg={3} xs={4} className="permission_title">
          {item.specialization}
        </Col>
      </Row>
      <Separator className="mb-5" />
    </React.Fragment>
  </Fade>
);
