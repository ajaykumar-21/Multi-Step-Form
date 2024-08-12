// import { useState } from "react";
// import GetData from "./getData";

// Function to validate form fields based on the current step in the form
const validateFields = ({ activeStep, values, setErrors }) => {
  //   const [values, setValues] = useState(GetData);
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const nameRegex = /^[A-z]*$|^[A-z]+\s[A-z]*$/;
  const phoneRegex = /^[0-9]{10}$/;
  const addressRegesx = /^[a-zA-Z0-9._-]/;
  const zipRegex = /^[0-9]{6}$/;
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
      newErrors.addressLine1 = "Enter the correct address1";
    }
    // Check if Address Line 1 is empty
    if (!values.addressLine2) {
      newErrors.addressLine2 = "Address2 is required";
    } else if (!values.addressLine2.match(addressRegesx)) {
      newErrors.addressLine2 = "Enter the correct address2";
    } // Check if Address Line 2 is empty
    if (!values.city) {
      newErrors.city = "City is required";
    } else if (!values.city.match(addressRegesx)) {
      newErrors.city = "Enter the correct city name";
    } // Check if city is empty
    if (!values.state) {
      newErrors.state = "State is required";
    } else if (!values.state.match(addressRegesx)) {
      newErrors.state = "Enter the correct state name";
    } // Check if state is empty
    if (!values.zip) {
      newErrors.zip = "Phone is required";
    } else if (!values.zip.match(zipRegex)) {
      newErrors.zip = "Enter the correct zip code";
    } // Check if ZIP code is empty
  }
  setErrors(newErrors); // Update the errors state with the newly found errors
  return Object.keys(newErrors).length === 0; // Return true if there are no errors, false otherwise
};
// validate.current = validateFields; // Assign the validateFields function to the current reference for validation

export default validateFields;
