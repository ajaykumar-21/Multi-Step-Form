import * as React from "react";
import { useState } from "react";
import { FormControl, InputLabel, Input, Box } from "@mui/material";
import "./PersonalInfo.css";

function PersonalInfo() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });
  console.log(values.name, values.email, values.phone);
  return (
    <div>
      <Box
        component="form"
        // sx={{
        //   "& > :not(style)": { m: 1 },
        // }}
        // noValidate
        // autoComplete="off"
      >
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
              className="nameInput"
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
