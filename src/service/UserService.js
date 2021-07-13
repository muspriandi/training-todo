import axios from 'axios'
import { BASE_API_URL, GLOBAL_SETTING } from '../configs/constants';

const MS_CONFIG = { baseURL: BASE_API_URL, delayed:true, delay_time: GLOBAL_SETTING.DELAY_TIME}

class UserService{
    async signupUser(userData){
        try{
            const response = await axios.post("/api/auth/signup", userData, MS_CONFIG)
            return response;
        }catch(err){
            alert(err)
            throw err
        }
    }
	
    async signinUser(userData){
        try{
            const response = await axios.post("/api/auth/signin", userData, MS_CONFIG)
            return response;
        }catch(err){
            alert(err)
            throw err
        }
    }
}

export default new UserService();