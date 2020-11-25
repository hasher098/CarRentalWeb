import {apiClient} from "./apiClient";

export const rentCarRequest = async(userId,carCopyId,RentDate,ReturnDate)=>{
    console.log(userId,carCopyId,RentDate,ReturnDate);
    const resp= await apiClient.post('/api/Rents/RentCar',{
        "userId":userId,"carCopyId":carCopyId,"RentDate":RentDate,"ReturnDate":ReturnDate
    });
    return resp;
};