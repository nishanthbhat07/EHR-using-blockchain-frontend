import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Label,
  FormGroup,
  Button,
  Form,
} from "reactstrap";
import UseronboardingImage from "../../views/app/add-patient/user-onboardingImage";
import { Separator } from "../common/Separator";

const UserOnBoardingCard = ({ history, state, handleChange, changePage }) => {
  return (
    <Card className="d-flex flex-row mb-4 p-2">
      <div className="user_onboaring__leftside">
        <UseronboardingImage />
      </div>

      <div className="user_onboaring__rightside">
        <Card className="inner-card">
          <div className="justify-content-center pl-3 ml-3">
            <CardHeader>User Details</CardHeader>
            <Separator className="separator-dark mb-5" />
            <Form>
              <FormGroup className="form-group ">
                <Label>Full Name</Label>
                <Input
                  name="name"
                  value={state.name}
                  onChange={(e) => handleChange(e)}
                  className="form-control"
                  required
                />
              </FormGroup>
              <FormGroup className="form-group ">
                <Label>Address</Label>
                <Input
                  value={state.address}
                  onChange={(e) => handleChange(e)}
                  type="textarea"
                  name="address"
                  className="form-control"
                  required
                />
              </FormGroup>
              <FormGroup className="form-group ">
                <Label>Contact</Label>
                <Input
                  value={state.contact}
                  onChange={(e) => handleChange(e)}
                  type="text"
                  name="contact"
                  className="form-control"
                  required
                />
              </FormGroup>
              <FormGroup className="form-group ">
                <Label>Age</Label>
                <Input
                  value={state.age}
                  onChange={(e) => handleChange(e)}
                  type="text"
                  name="age"
                  className="form-control"
                  required
                />
              </FormGroup>
              <FormGroup className="form-group ">
                <Label>Blood Group</Label>
                <Input
                  value={state.blood_group}
                  onChange={(e) => handleChange(e)}
                  type="select"
                  name="blood_group"
                  className=""
                  required
                >
                  <option value="A +ve">A +ve</option>
                  <option value="A -ve">A -ve</option>
                  <option value="O +ve">O +ve</option>
                  <option value="O -ve">O -ve</option>
                  <option value="B +ve">B +ve</option>
                  <option value="B -ve">B -ve</option>
                  <option value="AB +ve">AB +ve</option>
                  <option value="AB -ve">AB -ve</option>
                </Input>
              </FormGroup>
              <Button
                className={`btn btn-multiple-state signup-button-container`}
                onClick={changePage}
              >
                <span className="spinner d-block">
                  <span className="bounce1" />
                  <span className="bounce2" />
                  <span className="bounce3" />
                </span>
                <span className="label">Submit</span>
              </Button>
            </Form>
          </div>
        </Card>
      </div>
    </Card>
  );
};
export default UserOnBoardingCard;
