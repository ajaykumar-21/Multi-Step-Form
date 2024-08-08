import * as React from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
} from "@mui/material";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import AddressInfo from "../AddressInfo/AddressInfo";
import Confirmation from "../Confirmation/Confirmation";
// import { validate } from "../PersonalInfo/PersonalInfo";
import "./HorizontalStepper.css";

const steps = ["Personal Information", "Address Information", "Confirmation"];

export default function HorizontalStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
    // validate();
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    localStorage.removeItem("values");
  };

  return (
    <Box className="conatiner">
      <Box className="sub-container">
        <h1>MULTI STEP FORM</h1>
        <Stepper activeStep={activeStep} sx={{ width: "50vw" }}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography
              sx={{
                mt: 2,
                mb: 1,
                color: "green",
                fontWeight: "bolder",
                fontSize: "30px",
              }}
            >
              Thank You!
            </Typography>
            <Typography sx={{ mt: 2, mb: 1 }}>
              Form has been succesfully submitted.
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Finish</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1, width: "50vw" }}>
              {activeStep === 0 && <PersonalInfo activeStep={activeStep} />}
              {activeStep === 1 && <AddressInfo />}
              {activeStep === 2 && <Confirmation />}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                pt: 2,
                width: "50vw",
              }}
            >
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button
                onClick={() => {
                  handleNext();
                }}
              >
                {activeStep === steps.length - 1 ? "Submit" : "Next"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </Box>
  );
}
