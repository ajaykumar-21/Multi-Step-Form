import React, { useEffect, useState } from "react";
import { FormControl, InputLabel, Input, Box } from "@mui/material";
import GetData from "../GetData/GetData";

function AddressInfo() {
  const [values, setValues] = useState(GetData);

  useEffect(() => {
    localStorage.setItem("values", JSON.stringify(values));
  }, [values]);

  return (
    <div>
      <Box component="form">
        <FormControl variant="standard">
          <FormControl variant="standard" sx={{ marginBottom: "15px" }}>
            <InputLabel htmlFor="addressLine1">Address Line 1</InputLabel>
            <Input
              id="addressLine1"
              type="text"
              value={values.addressLine1}
              onChange={(e) =>
                setValues((prev) => ({ ...prev, addressLine1: e.target.value }))
              }
              sx={{ width: "500px" }}
            />
          </FormControl>
          <FormControl variant="standard" sx={{ marginBottom: "15px" }}>
            <InputLabel htmlFor="addressLine2">Address Line 2</InputLabel>
            <Input
              id="addressLine2"
              type="text"
              value={values.addressLine2}
              onChange={(e) =>
                setValues((prev) => ({ ...prev, addressLine2: e.target.value }))
              }
            />
          </FormControl>
          <FormControl variant="standard" sx={{ marginBottom: "15px" }}>
            <InputLabel htmlFor="city">City</InputLabel>
            <Input
              id="city"
              type="text"
              value={values.city}
              onChange={(e) =>
                setValues((prev) => ({ ...prev, city: e.target.value }))
              }
            />
          </FormControl>
          <FormControl variant="standard" sx={{ marginBottom: "15px" }}>
            <InputLabel htmlFor="state">State</InputLabel>
            <Input
              id="state"
              type="text"
              value={values.state}
              onChange={(e) =>
                setValues((prev) => ({ ...prev, state: e.target.value }))
              }
            />
          </FormControl>
          <FormControl variant="standard" sx={{ marginBottom: "15px" }}>
            <InputLabel htmlFor="zip">Zip</InputLabel>
            <Input
              id="zip"
              type="text"
              value={values.zip}
              onChange={(e) =>
                setValues((prev) => ({ ...prev, zip: e.target.value }))
              }
            />
          </FormControl>
        </FormControl>
      </Box>
    </div>
  );
}

export default AddressInfo;
