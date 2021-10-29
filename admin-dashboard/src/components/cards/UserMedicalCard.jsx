import React, { useEffect } from "react";
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
import { Transform, Fade } from "react-animation-components";
const UserMedicalCard = ({ state, handleChange, calculateBMI, onFinish }) => {
  useEffect(() => {
    calculateBMI();
  }, [state.height, state.weight]);
  return (
    <Card className="d-flex flex-row mb-4 p-2">
      <div className="user_onboaring__leftside">
        <UseronboardingImage />
      </div>

      <div className="user_onboaring__rightside">
        <Fade in>
          <Card className="inner-card">
            <div className="justify-content-center pl-3 ml-3">
              <CardHeader>User Medical Details</CardHeader>
              <Separator className="separator-dark mb-5" />
              <Form>
                <FormGroup className="form-group ">
                  <Label>Weight in KGs</Label>
                  <Input
                    type="number"
                    name="weight"
                    value={state.weight}
                    onChange={(e) => handleChange(e)}
                    className="form-control"
                    required
                  />
                </FormGroup>
                <FormGroup className="form-group ">
                  <Label>Height in CMs</Label>
                  <Input
                    type="number"
                    value={state.height}
                    onChange={(e) => handleChange(e)}
                    name="height"
                    className="form-control"
                    required
                  />
                </FormGroup>
                <FormGroup className="form-group ">
                  <Label>BMI</Label>
                  <Input
                    value={state.bmi}
                    disabled={true}
                    type="number"
                    name="bmi"
                    className="form-control"
                    required
                  />
                </FormGroup>
                <FormGroup className="form-group ">
                  <Label>Allergies</Label>
                  <Input
                    value={state.allergy}
                    onChange={(e) => handleChange(e)}
                    type="textarea"
                    name="allergy"
                  />
                </FormGroup>
                <FormGroup className="form-group ">
                  <Label>Any previous medical history</Label>
                  <Input
                    value={state.medical_history}
                    onChange={(e) => handleChange(e)}
                    type="textarea"
                    name="medical_history"
                  />
                </FormGroup>
                <Button
                  onClick={onFinish}
                  className={`btn btn-multiple-state signup-button-container`}
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
        </Fade>
      </div>
    </Card>
  );
};
export default UserMedicalCard;
