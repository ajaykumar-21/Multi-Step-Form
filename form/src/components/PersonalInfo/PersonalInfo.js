import React, { useEffect, useState } from "react";
import { FormControl, InputLabel, Input, Box } from "@mui/material";
import "./PersonalInfo.css";
import GetData from "../GetData/GetData";
// import validate from "../Validate/validate";

function PersonalInfo({ activeStep }) {
  const [values, setValues] = useState(GetData);
  // console.log(values);
  // const [error, setError] = useState("");

  useEffect(() => {
    localStorage.setItem("values", JSON.stringify(values));
  }, [values]);

  return (
    <div>
      {/* <validate activeStep={activeStep} values={values} /> */}
      <Box component="form">
        <FormControl variant="standard">
          <FormControl variant="standard" sx={{ marginBottom: "15px" }}>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input
              id="name"
              type="text"
              value={values.name}
              onChange={(e) =>
                setValues((prev) => ({ ...prev, name: e.target.value }))
              }
              sx={{ width: "500px" }}
            />
          </FormControl>
          <FormControl variant="standard" sx={{ marginBottom: "15px" }}>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              id="email"
              type="email"
              value={values.email}
              onChange={(e) =>
                setValues((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </FormControl>
          <FormControl variant="standard" sx={{ marginBottom: "15px" }}>
            <InputLabel htmlFor="phone">Phone</InputLabel>
            <Input
              id="phone"
              type="tel"
              value={values.phone}
              onChange={(e) =>
                setValues((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          </FormControl>
        </FormControl>
      </Box>
    </div>
  );
}

export default PersonalInfo;
