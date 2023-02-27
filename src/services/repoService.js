import axios from 'axios';
import {BASE_URL,API_TOKEN} from "@config";

const instance = axios.create({
  timeout: 1000,
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    Authorization: `token ${API_TOKEN}`,
  },
});

const getRepo = async payload => {
  return instance
    .get(BASE_URL, {
      params: {
        q: payload?.query,
        page: payload?.page,
        per_page: 20,
        rel:"next"
      },
    })
    .then(res => { return res })
    .catch(err => { return err });
};

const reposService = {
  getRepo,
};

export default reposService;
