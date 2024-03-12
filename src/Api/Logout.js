import axios from 'axios';
import url from '../Utils/Utils.js';

const endPoint="removeCookies";

async function logoutButton()
{
    try
    {
        const response=await axios.get(`${url}/${endPoint}`,{headers:{'Content-Type':'application/json'},withCredentials:true});
        if(response.data.cookie)
         { 
            localStorage.setItem("username","");
            localStorage.setItem("login","Login");
            console.log("if",response.data.cookie);

         }
        else
          {
            localStorage.setItem("username","");
            localStorage.setItem("login","Login");
            console.log(response.data.cookie);
          }
    }
     catch(err)
     {
        throw new err;
     }
}

export default logoutButton;