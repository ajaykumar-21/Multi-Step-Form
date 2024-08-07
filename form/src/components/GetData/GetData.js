function GetData() {
  const storedData = JSON.parse(localStorage.getItem("values"));
  if (!storedData) {
    return {
      name: "",
      email: "",
      phone: "",
      AddressLine1: "",
      AddressLine2: "",
      City: "",
      State: "",
      Zip: "",
    };
  }
  return storedData;
}
export default GetData;
