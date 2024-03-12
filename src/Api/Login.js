import axios from 'axios';
import url from '../Utils/Utils.js';


async function LoginUser(userData)
{
    try
    {
        const response=await axios.post(`${url}/login`,userData,{headers:{'Content-Type':'application/json'},withCredentials:true});
        if(response.data.login)
          return response.data;
        else
          return "Login unsuccessfull!";
    }
     catch(err)
     {
        throw new err;
     }
}

export {LoginUser};