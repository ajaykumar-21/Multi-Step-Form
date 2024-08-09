function GetData() {
  // Retrieve the data stored in localStorage under the key "values" and parse it from a JSON string into a JavaScript object.
  const storedData = JSON.parse(localStorage.getItem("values"));
  if (!storedData) {
    // If there's no stored data, return an object with empty strings for each field.
    return {
      name: "",
      email: "",
      phone: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      zip: "",
    };
  }
  return storedData; // If data exists in localStorage, return the parsed object with the stored values.
}
export default GetData;
