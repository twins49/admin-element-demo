import axios from 'axios';


const httpRequest = axios.create({
  timeout: 5e3,
});


axios.interceptors.request.use(
  /* eslint-disable */
  (config) => {
    config.data = config.data;
    config.headers = {
      'Content-Type': 'application/json',
    };
    return config;
  },
);

export {
  axios,
  httpRequest,
};
