import {apiClient} from "./apiClient";

export const listOfCarsRequest = async()=>{
    return await apiClient.get(`/api/Cars`);
    
};

export const listCar = async(id)=>{
    return await apiClient.get(`/api/Cars/${id}`);
    
};