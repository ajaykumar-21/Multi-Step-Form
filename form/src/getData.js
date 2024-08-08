function GetData() {
  const storedData = JSON.parse(localStorage.getItem("values"));
  if (!storedData) {
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
  return storedData;
}
export default GetData;
