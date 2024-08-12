import React, { useRef, useState, useEffect } from "react";
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

  useEffect(() => {
    localStorage.setItem("values", JSON.stringify(values)); // Save the current form values to localStorage so that they persist across page reloads or user navigation
  }, [values]);

  // Function to validate form fields based on the current step in the form
  const validateFields = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const nameRegex = /^[A-z]*$|^[A-z]+\s[A-z]*$/;
    const phoneRegex = /^[0-9]{10}$/;
    const addressRegesx = /^[a-zA-Z0-9._-]/;
    const newErrors = {};
    // Validation for step 0 (Personal Information)
    if (activeStep === 0) {
      if (!values.name) {
        // Check if name is empty
        newErrors.name = "Name is required";
      } else if (!values.name.match(nameRegex)) {
        // check if name is correct or not
        newErrors.name = "Enter the correct name";
      }
      if (!values.email) {
        // Check if email is empty
        newErrors.email = "Email is required";
      } else if (!values.email.match(emailRegex)) {
        // check if email is correct or not
        newErrors.email = "Enter a valid email address";
      }
      if (!values.phone) {
        // Check if phone number is empty
        newErrors.phone = "Phone is required";
      } else if (!values.phone.match(phoneRegex)) {
        // check if phone number is valid or not
        newErrors.phone = "Enter a valid phone number";
      }

      // Validation for step 1 (Address Information)
    } else if (activeStep === 1) {
      if (!values.addressLine1) {
        newErrors.addressLine1 = "Address1 is required";
      } else if (!values.addressLine1.match(addressRegesx)) {
        newErrors.addressLine1 = "Enter correct address";
      }
      // Check if Address Line 1 is empty
      if (!values.addressLine2) newErrors.addressLine2 = "Email is required"; // Check if Address Line 2 is empty
      if (!values.city) newErrors.city = "Phone is required"; // Check if city is empty
      if (!values.state) newErrors.state = "Phone is required"; // Check if state is empty
      if (!values.zip) newErrors.zip = "Phone is required"; // Check if ZIP code is empty
    }
    setErrors(newErrors); // Update the errors state with the newly found errors
    return Object.keys(newErrors).length === 0; // Return true if there are no errors, false otherwise
  };
  validate.current = validateFields; // Assign the validateFields function to the current reference for validation

  const handleNext = () => {
    // Call the current validation function to check if the current step's data is valid
    if (validate.current()) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1); // If the data is valid, move to the next step by incrementing the activeStep state
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1); // Decrement the activeStep state to move back to the previous step
  };

  const handleReset = () => {
    setActiveStep(0); // Reset the activeStep state to 0, which will take the user back to the first step of the form
    localStorage.removeItem("values"); // Remove the saved form data from localStorage

    // Reset the form values to their initial state with empty strings
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
                <StepLabel {...labelProps} className="stepLabel">
                  {label}
                </StepLabel>
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
