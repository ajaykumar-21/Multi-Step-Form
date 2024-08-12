import React from "react";
import "./AddressInfo.css";

function AddressInfo({ values, setValues, errors }) {
  return (
    <div class="form-container">
      <form>
        <div class="form-group">
          <label
            for="addressLine1"
            class={errors.addressLine1 ? "label error" : "label"}
          >
            Address Line 1
          </label>
          <input
            type="text"
            id="addressLine1"
            class={errors.addressLine1 ? "inputField error" : "inputField"}
            value={values.addressLine1}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, addressLine1: e.target.value }))
            }
          />
          {errors.addressLine1 && (
            <p class="error-message">{errors.addressLine1}</p>
          )}
        </div>

        <div class="form-group">
          <label
            for="addressLine2"
            class={errors.addressLine2 ? "label error" : "label"}
          >
            Address Line 2
          </label>
          <input
            type="text"
            id="addressLine2"
            class={errors.addressLine2 ? "inputField error" : "inputField"}
            value={values.addressLine2}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, addressLine2: e.target.value }))
            }
          />
          {errors.addressLine2 && (
            <p class="error-message">{errors.addressLine2}</p>
          )}
        </div>

        <div class="form-group">
          <label for="city" class={errors.city ? "label error" : "label"}>
            City
          </label>
          <input
            type="text"
            id="city"
            class={errors.city ? "inputField error" : "inputField"}
            value={values.city}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, city: e.target.value }))
            }
          />
          {errors.city && <p class="error-message">{errors.city}</p>}
        </div>

        <div class="form-group">
          <label for="state" class={errors.state ? "label error" : "label"}>
            State
          </label>
          <input
            type="text"
            id="state"
            class={errors.state ? "inputField error" : "inputField"}
            value={values.state}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, state: e.target.value }))
            }
          />
          {errors.state && <p class="error-message">{errors.state}</p>}
        </div>

        <div class="form-group">
          <label for="zip" class={errors.zip ? "label error" : "label"}>
            Zip Code
          </label>
          <input
            type="text"
            id="zip"
            class={errors.zip ? "inputField error" : "inputField"}
            value={values.zip}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, zip: e.target.value }))
            }
          />
          {errors.zip && <p class="error-message">{errors.zip}</p>}
        </div>
      </form>
    </div>
  );
}

export default AddressInfo;
