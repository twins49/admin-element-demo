import axios from 'axios';


const httpRequest = axios.create({
  timeout: 5e3,
});


axios.interceptors.request.use(
  /* eslint-disable */
  (config) => {
    config.data = JSON.stringify(config.data);
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    return config;
  },
);

export {
  axios,
  httpRequest,
};
