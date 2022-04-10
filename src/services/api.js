import axios from "axios";

const {REACT_APP_API_URL} = process.env;

// Management Distributor
export const getDistributors = async (params) => {
  return await axios.get(`${REACT_APP_API_URL}/distributors?offset=0&limit=10&order=id,asc`)
}