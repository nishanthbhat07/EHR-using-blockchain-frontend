import React from "react";
import { Row, Col, Card, Button, CardBody } from "reactstrap";
import { Separator } from "../../../components/common/Separator";
import { connect } from "react-redux";
import Loader from "../../../components/loader/Loader";
import { fetchUserPermission } from "../../../redux/permissions/permission.actions";

import { Fade, FadeTransform, Stagger } from "react-animation-components";

class MyPermission extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      permissions_data: this.props.user_permissions,
    };
  }

  componentDidMount() {
    const user_id = JSON.parse(localStorage.getItem("user"));
    console.log(this.props.user_permissions, "PERMISSIONS");
    this.props.fetchUserPermission(user_id._id["$oid"]);
  }

  render() {
    return (
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
                  {this.props.loading && <Loader />}
                  {this.props.error && alert(this.props.error)}
                  {this.props.user_permissions.length !== 0 && (
                    <Row>
                      <Col xs={12}>
                        <Stagger in>
                          {this.props.user_permissions.map((item, index) => (
                            <RenderPermissions index={index} item={item} />
                          ))}
                        </Stagger>
                      </Col>
                    </Row>
                  )}
                </CardBody>
              </div>
            </Card>
          </Col>
        </Row>
      </FadeTransform>
    );
  }
}

const mapStateToProps = (state) => ({
  user_permissions: state.permissions.user_permissions,
  loading: state.permissions.loading,
  error: state.permissions.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserPermission: (user_id) => dispatch(fetchUserPermission(user_id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(MyPermission);
const RenderPermissions = ({ index, item }) => (
  <Fade in>
    <React.Fragment key={index}>
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
            <i className="fas fa-check-circle fa-2x" />
          </Button>
        </Col>
        <Col xs={6} md={6} lg={1} className="permission_button_container">
          <Button
            onClick={() => console.log("revoked access")}
            className="btn btn-multiple-state  permission_button"
          >
            <i className="far fa-times-circle fa-2x" />
          </Button>
        </Col>
      </Row>
      <Separator className="mb-5" />
    </React.Fragment>
  </Fade>
);
