function validate({ activeStep, values }) {
  if (activeStep === 0 && !values.name) {
    alert("please fill the filled!");
  }
}

export default validate;
