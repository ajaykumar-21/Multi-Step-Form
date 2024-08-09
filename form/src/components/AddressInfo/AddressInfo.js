import React from "react";
import {
  FormControl,
  InputLabel,
  Input,
  Box,
  FormHelperText,
} from "@mui/material";
import "./AddressInfo.css";

function AddressInfo({ values, setValues, errors }) {
  return (
    <div>
      <Box component="form">
        <FormControl variant="standard">
          <FormControl
            variant="standard"
            sx={{ marginBottom: "15px" }}
            error={!!errors.addressLine1}
          >
            <InputLabel htmlFor="addressLine1">Address Line 1</InputLabel>
            <Input
              id="addressLine1"
              type="text"
              value={values.addressLine1}
              onChange={(e) =>
                setValues((prev) => ({ ...prev, addressLine1: e.target.value }))
              }
              className="inputField"
            />
            {errors.addressLine1 && (
              <FormHelperText>{errors.addressLine1}</FormHelperText>
            )}
          </FormControl>
          <FormControl
            variant="standard"
            sx={{ marginBottom: "15px" }}
            error={!!errors.addressLine2}
          >
            <InputLabel htmlFor="addressLine2">Address Line 2</InputLabel>
            <Input
              id="addressLine2"
              type="text"
              value={values.addressLine2}
              onChange={(e) =>
                setValues((prev) => ({ ...prev, addressLine2: e.target.value }))
              }
            />
            {errors.addressLine2 && (
              <FormHelperText>{errors.addressLine2}</FormHelperText>
            )}
          </FormControl>
          <FormControl
            variant="standard"
            sx={{ marginBottom: "15px" }}
            error={!!errors.city}
          >
            <InputLabel htmlFor="city">City</InputLabel>
            <Input
              id="city"
              type="text"
              value={values.city}
              onChange={(e) =>
                setValues((prev) => ({ ...prev, city: e.target.value }))
              }
            />
            {errors.city && <FormHelperText>{errors.city}</FormHelperText>}
          </FormControl>
          <FormControl
            variant="standard"
            sx={{ marginBottom: "15px" }}
            error={!!errors.state}
          >
            <InputLabel htmlFor="state">State</InputLabel>
            <Input
              id="state"
              type="text"
              value={values.state}
              onChange={(e) =>
                setValues((prev) => ({ ...prev, state: e.target.value }))
              }
            />
            {errors.state && <FormHelperText>{errors.state}</FormHelperText>}
          </FormControl>
          <FormControl
            variant="standard"
            sx={{ marginBottom: "15px" }}
            error={!!errors.zip}
          >
            <InputLabel htmlFor="zip">Zip</InputLabel>
            <Input
              id="zip"
              type="text"
              value={values.zip}
              onChange={(e) =>
                setValues((prev) => ({ ...prev, zip: e.target.value }))
              }
            />
            {errors.zip && <FormHelperText>{errors.zip}</FormHelperText>}
          </FormControl>
        </FormControl>
      </Box>
    </div>
  );
}

export default AddressInfo;
