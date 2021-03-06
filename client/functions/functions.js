import axios from 'axios';

const toServer = {};
//===============GET USER DATA==================
// UrlSearchParams

toServer.getUser = (url) => {
  axios
    .get(url)
    //.then((res) => res.json())                axios already parses the data for you
    .then((res) => {
      this.setState({ username: res.data.username });
    })
    //.then()
    .catch((err) => {
      console.log(err);
    });
  return;
};

//===============HABITS REQUEST================
toServer.getHabits = (array, url) => {
  axios
    .get(url)
    //.then((res) => res.json())
    .then((res) => {
      console.log(res);
      res.forEach((n) => array.push(n));
    })
    .catch((err) => {
      console.log(err);
    });
  return;
};

export default toServer;
