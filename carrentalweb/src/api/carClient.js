import {apiClient} from "./apiClient";

export const listOfCarsRequest = async()=>{
    return await apiClient.get(`/api/Cars`);
    
};