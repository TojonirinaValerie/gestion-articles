import axios from "axios";

const axiosInstance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BASE_API_URL}`,
    timeout: 60000,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})

export default axiosInstance