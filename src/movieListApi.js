import axios from "axios";

async function apiReq(URL) {
  const options = {
    method: "GET",
    url: URL,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
    },
  };

  const response = await axios.request(options);
  return response.data.results;
}

export default apiReq;
