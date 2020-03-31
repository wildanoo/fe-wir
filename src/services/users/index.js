import axios from "axios";

export const getDataUsers = params => axios({
  method: 'GET',
  url: 'https://jsonplaceholder.typicode.com/users',
  params
})
  .then(res => res.data)
  .catch(err => err.data)