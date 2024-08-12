import React from "react";
import "./PersonalInfo.css";

function PersonalInfo({ values, setValues, errors }) {
  return (
    <div className="form-container">
      <div className="form-group">
        <label htmlFor="fname" className={errors.name ? "error-label" : ""}>
          Name
        </label>
        <input
          type="text"
          id="fname"
          className={errors.name ? "input-error" : ""}
          value={values.name}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        {errors.name && <p className="error-message">{errors.name}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="email" className={errors.email ? "error-label" : ""}>
          Email
        </label>
        <input
          type="email"
          id="email"
          className={errors.email ? "input-error" : ""}
          value={values.email}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        {errors.email && <p className="error-message">{errors.email}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="phone" className={errors.phone ? "error-label" : ""}>
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          className={errors.phone ? "input-error" : ""}
          value={values.phone}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, phone: e.target.value }))
          }
        />
        {errors.phone && <p className="error-message">{errors.phone}</p>}
      </div>
    </div>
  );
}

export default PersonalInfo;
