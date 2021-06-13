const axios = require('axios');

const requestGet = async (url, params) => {
  const res = await axios.get(url, params)
  return res.data
}

module.exports = { requestGet }
