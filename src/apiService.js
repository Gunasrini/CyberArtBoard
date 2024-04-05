import axios from "axios";
import apiConfig from "./apiConfig";


const authaxiosService = axios.create({
    baseURL: apiConfig.baseUrl,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiConfig.accessToken}`,
    },
  });

  const axiosService = axios.create({
    baseURL: apiConfig.baseUrl,
    headers: {
      'Content-Type': 'application/json',
      // No Authorization header for this instance
    },
  });

  const apiService = {
  
    authpostMethod: (apiName, data) => {
  
      console.log(apiName, "apiname");
      console.log(authaxiosService.accessToken,"baseurlee");
      console.log(axiosService.baseURL,"11111111111111111");
  
      return authaxiosService.post(`${apiName}`, data);
    },
    postMethod: (apiName, data) => {
      console.log(apiName, "apiddddddddddsss");
      console.log(axiosService.baseURL,"baseurlee");
      return axiosService.post(`${apiName}`, data);
    },
  
    getMethod: (apiName) => {
      return axiosService.get(`${apiName}`);
    },
  };
  
  export default apiService;
  