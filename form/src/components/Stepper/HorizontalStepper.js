import React, { useRef, useState } from "react";
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
import GetData from "../../getData";
import "./HorizontalStepper.css";

const steps = ["Personal Information", "Address Information", "Confirmation"];

export default function HorizontalStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [values, setValues] = useState(GetData);
  const [errors, setErrors] = useState({});
  const validate = useRef(() => true);

  const validateFields = () => {
    const newErrors = {};
    if (activeStep === 0) {
      if (!values.name) newErrors.name = "Name is required";
      if (!values.email) newErrors.email = "Email is required";
      if (!values.phone) newErrors.phone = "Phone is required";
    } else if (activeStep === 1) {
      if (!values.addressLine1) newErrors.addressLine1 = "Address1 is required";
      if (!values.addressLine2) newErrors.addressLine2 = "Email is required";
      if (!values.city) newErrors.city = "Phone is required";
      if (!values.state) newErrors.state = "Phone is required";
      if (!values.zip) newErrors.zip = "Phone is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  validate.current = validateFields;

  const handleNext = () => {
    if (validate.current()) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    localStorage.removeItem("values");
    setValues({
      name: "",
      email: "",
      phone: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      zip: "",
    });
  };

  return (
    <Box className="conatiner">
      <Box className="sub-container">
        <h1>MULTI STEP FORM</h1>
        <Stepper activeStep={activeStep} className="stepper">
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps} className="stepLabel">{label}</StepLabel>
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
              {activeStep === 0 && (
                <PersonalInfo
                  values={values}
                  setValues={setValues}
                  errors={errors}
                />
              )}
              {activeStep === 1 && (
                <AddressInfo
                  values={values}
                  setValues={setValues}
                  errors={errors}
                />
              )}
              {activeStep === 2 && <Confirmation values={values} />}
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
