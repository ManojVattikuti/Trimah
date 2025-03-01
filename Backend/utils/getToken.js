const axios = require('axios');
const dotenv = require("dotenv")
dotenv.config()

 const getToken = async () => {
  const url = "https://api.ceipal.com/v1/createAuthtoken";

  const payload = {
      email: process.env.CEIPAL_EMAIL,
      password: process.env.CEIPAL_PASS,
      api_key: process.env.CEIPAL_API_KEY
  };

  try {
      const response = await axios.post(url, payload, { headers: { "Content-Type": "application/json" } });
      return response.data.access_token; // Return only the token
  } catch (error) {
      console.error("Error fetching token:", error.response ? error.response.data : error.message);
      throw error;
  }
};

module.exports = getToken;