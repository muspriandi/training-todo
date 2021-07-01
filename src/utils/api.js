import axios from 'axios';

export default {
    getTodoList: async function(){
        try{
            const response = await axios.get("http://localhost:3001/getTodoList");
            return response;
        }catch(error){
            console.log(error);
            throw error;
        }
    }
}