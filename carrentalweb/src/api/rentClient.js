import {
    apiClient
} from "./apiClient";


export const listOfRents = async () => {
    return await apiClient.get(`/api/Rents`);
};

export const nameInRents = async () =>{
    return await apiClient.get(`/api/Authentication/GetUserList`);
}