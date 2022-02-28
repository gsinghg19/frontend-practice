const axios = require("axios");

exports.getAllUsers = () => {
  return axios
    .get("https://pratice-user-dvd.herokuapp.com/api/users")
    .then(({ data: { getAllUsers } }) => {
      return getAllUsers;
    });
};

exports.getSingleUser = (user) => {
  return axios
    .get(`https://pratice-user-dvd.herokuapp.com/api/${user}`)
    .then(({ data: { getSingleUser } }) => {
      return getSingleUser;
    });
};

exports.getAllDvds = () => {
  return axios
    .get("https://pratice-user-dvd.herokuapp.com/api/dvds")
    .then(({ data: { getAllDvds } }) => {
      return getAllDvds;
    });
};
