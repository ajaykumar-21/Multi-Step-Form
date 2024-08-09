import React from "react";
import {
  FormControl,
  InputLabel,
  Input,
  Box,
  FormHelperText,
} from "@mui/material";
import "./PersonalInfo.css";

function PersonalInfo({ values, setValues, errors }) {
  return (
    <div>
      <Box component="form">
        <FormControl variant="standard">
          <FormControl
            variant="standard"
            sx={{ marginBottom: "15px" }}
            error={!!errors.name}
          >
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input
              id="name"
              type="text"
              value={values.name}
              onChange={(e) =>
                setValues((prev) => ({ ...prev, name: e.target.value }))
              }
              className="inputField"
            />
            {errors.name && <FormHelperText>{errors.name}</FormHelperText>}
          </FormControl>
          <FormControl
            variant="standard"
            sx={{ marginBottom: "15px" }}
            error={!!errors.email}
          >
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              id="email"
              type="email"
              value={values.email}
              onChange={(e) =>
                setValues((prev) => ({ ...prev, email: e.target.value }))
              }
            />
            {errors.email && <FormHelperText>{errors.email}</FormHelperText>}
          </FormControl>
          <FormControl
            variant="standard"
            sx={{ marginBottom: "15px" }}
            error={!!errors.phone}
          >
            <InputLabel htmlFor="phone">Phone</InputLabel>
            <Input
              id="phone"
              type="tel"
              value={values.phone}
              onChange={(e) =>
                setValues((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
            {errors.phone && <FormHelperText>{errors.phone}</FormHelperText>}
          </FormControl>
        </FormControl>
      </Box>
    </div>
  );
}

export default PersonalInfo;
