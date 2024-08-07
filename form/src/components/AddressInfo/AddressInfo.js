import React, { useEffect, useState } from "react";
import { FormControl, InputLabel, Input, Box } from "@mui/material";
import GetData from "../GetData/GetData";

function AddressInfo() {
  const [values, setValues] = useState(GetData);

  useEffect(() => {
    localStorage.setItem("values", JSON.stringify(values));
  }, [values]);
  console.log(values.name, values.email, values.phone);
  return (
    <div>
      <Box component="form">
        <FormControl variant="standard">
          <FormControl variant="standard" sx={{ marginBottom: "15px" }}>
            <InputLabel htmlFor="addressLine1">Address Line 1</InputLabel>
            <Input
              id="addressLine1"
              type="text"
              value={values.AddressLine1}
              onChange={(e) =>
                setValues((prev) => ({ ...prev, AddressLine1: e.target.value }))
              }
              className="nameInput"
            />
          </FormControl>
          <FormControl variant="standard" sx={{ marginBottom: "15px" }}>
            <InputLabel htmlFor="addressLine2">Address Line 2</InputLabel>
            <Input
              id="emaddressLine2"
              type="text"
              value={values.AddressLine2}
              onChange={(e) =>
                setValues((prev) => ({ ...prev, AddressLine2: e.target.value }))
              }
            />
          </FormControl>
          <FormControl variant="standard" sx={{ marginBottom: "15px" }}>
            <InputLabel htmlFor="city">City</InputLabel>
            <Input
              id="city"
              type="text"
              value={values.City}
              onChange={(e) =>
                setValues((prev) => ({ ...prev, City: e.target.value }))
              }
            />
          </FormControl>
          <FormControl variant="standard" sx={{ marginBottom: "15px" }}>
            <InputLabel htmlFor="state">State</InputLabel>
            <Input
              id="state"
              type="text"
              value={values.State}
              onChange={(e) =>
                setValues((prev) => ({ ...prev, State: e.target.value }))
              }
            />
          </FormControl>
        </FormControl>
      </Box>
    </div>
  );
}

export default AddressInfo;
