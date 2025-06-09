const axios = require("axios");

const adminUser = {
  uid: "XpmO8UiGA7WwqwO3otvSI2a3ELd2",
  email: "admin@worldtourguide.com",
  role: "admin",
};

axios.post("http://localhost:5000/api/users/save", adminUser)
  .then(res => console.log(res.data))
  .catch(err => console.error(err));
