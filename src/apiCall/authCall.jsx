import { DataArraySharp } from "@mui/icons-material";
import axios from "axios";

const useAuthCall = () => {
  const login = async (userInfo) => {
    const BASE_URL = "https://13800.fullstack.clarusway.com/";
    try {
      const { data } = await axios.post(
        `${BASE_URL}account/auth/login/`,
        userInfo
      );
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  return { login };
};

export default useAuthCall;
