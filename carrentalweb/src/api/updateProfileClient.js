import {apiClient} from "./apiClient";

export const updateProfileData = async(id,firstName,lastName,address,idcardnumber,pesel)=>{
    const resp= await apiClient.post('/api/Authentication/UserEdit',{
        id,firstName,lastName,address,idcardnumber,pesel
    });
    return resp;
};