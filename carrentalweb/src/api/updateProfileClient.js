import {apiClient} from "./apiClient";

export const updateProfileData = async(id,firstName,lastName,address,idcardnumber,pesel)=>{
    console.log(id);
    const resp= await apiClient.post('/api/Authentication/UserEdit',{
        id:id,LastName:lastName,FirstName:firstName,pesel:pesel,Adress:address,IdcardNumber:idcardnumber
    });
    return resp;
};