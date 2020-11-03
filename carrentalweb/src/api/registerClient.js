import {apiClient} from "./apiClient";

export const registerRequest = async(userName,email,password)=>{
    return await apiClient.post('/api/Authentication/Register',{
        userName,email,password
    });
    
};