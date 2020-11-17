import {apiClient} from "./apiClient";

export const loginRequest = async(userName,password)=>{
    const resp= await apiClient.post('/api/Authentication/Login',{
        userName,password
    });
    localStorage.setItem('token',resp.data.token);
    return resp;
};