import {apiClient} from "./apiClient";

export const updateProfileData = async(firstName,lastName,address,idcardnumber,pesel)=>{
    const resp= await apiClient.post('/api/Authentication/Login',{
        firstName,lastName,address,idcardnumber,pesel
    });
    return resp;
};