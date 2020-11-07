import {apiClient} from "./apiClient";

export const loginRequest = async(userName,password)=>{
    return await apiClient.post('/api/Authentication/Login',{
        userName,password
    });
    
};