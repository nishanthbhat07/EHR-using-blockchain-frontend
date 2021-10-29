import React, { Fragment } from "react";
import { Row, Col, Card, Button, CardHeader, CardBody } from "reactstrap";
import { Separator } from "../../../components/common/Separator";
import { connect } from "react-redux";
import Loader from "../../../components/loader/Loader";
import { fetchUserPermission } from "../../../redux/permissions/permission.actions";
import { Helmet } from "react-helmet";
import { Fade, FadeTransform, Stagger } from "react-animation-components";
const patients = [
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
  {
    id: "4",
    name: "Priya Joshi",
    email: "pj@gmail.com",
    gender: "F",
    dob: "07/06/2000",
  },
  {
    id: "5",
    name: "Parvati Raj",
    email: "parvatir@yahoo.com",
    gender: "F",
    dob: "",
  },
  {
    id: "6",
    name: "Arpit Rajavade",
    email: "arpit.rajavadedps2000@gmail.com",
    gender: "M",
    dob: "11/01/1996",
  },
  {
    id: "7",
    name: "Vinay Vad",
    email: "vinay.vad@yahoo.com",
    gender: "M",
    dob: "03/03/2000",
  },
  {
    id: "8",
    name: "Neha Chetti",
    email: "neha.chetti@yahoo.com",
    gender: "F",
    dob: "22/07/1998",
  },
  {
    id: "9",
    name: "Divya Goswami",
    email: "divya.goswami@gmail.com",
    gender: "F",
    dob: "25/12/2000",
  },
  {
    id: "10",
    name: "Arnav Sharma",
    email: "arnavs@yahoo.com",
    gender: "M",
    dob: "10/01/2000",
  },
];
class Patients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list_of_patients: patients,
    };
  }

  // componentDidMount() {
  //   const user_id = JSON.parse(localStorage.getItem("user"));
  //   console.log(this.props.user_permissions, "PERMISSIONS");
  //   this.props.fetchUserPermission(user_id._id["$oid"]);
  // }

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Patients</title>
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
                    <CardHeader>List of Patients</CardHeader>
                    <Separator className="mb-5" />
                    <Row className="row_header">
                      <Col xs={3} className="permission_header">
                        Name
                      </Col>
                      <Col xs={3} className="permission_header">
                        {" "}
                        Email
                      </Col>
                      <Col xs={3} className="permission_header">
                        DOB
                      </Col>
                      <Col xs={3} className="permission_header">
                        Gender
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12}>
                        <Stagger in>
                          {this.state.list_of_patients.map((item, index) => (
                            <RenderPatients item={item} index={index} />
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
      </Fragment>
    );
  }
}

export default Patients;
const RenderPatients = ({ item, index }) => (
  <Fade in>
    <React.Fragment key={index}>
      <Row className="row-permission">
        <Col xs={3} className="permission_title">
          {item.name}
        </Col>
        <Col xs={3} className="permission_purpose">
          {item.email}
        </Col>
        <Col xs={3} className="permission_title">
          {item.dob}
        </Col>
        <Col xs={3} className="permission_title">
          {item.gender}
        </Col>
        {/*<Col xs={6} md={6} lg={1} className="permission_button_container">
          <Button
            onClick={() => console.log("Access Granted")}
            className="btn btn-multiple-state  permission_button"
          >
            Give Access
          </Button>
</Col>*/}
      </Row>
      <Separator className="mb-5" />
    </React.Fragment>
  </Fade>
);
