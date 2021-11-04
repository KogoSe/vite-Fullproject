import axios from "axios";
import { Web_API } from "../env";

axios.defaults.baseURL = Web_API

axios.interceptors.response.use(
    (response)=>{
        return response
    },
    (error)=>{
        throw error
    }

)