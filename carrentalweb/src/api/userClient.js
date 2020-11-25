import {
    apiClient
} from "./apiClient";

export const userDetails = async (id) => {
    return await apiClient.get(`/api/Authentication/GetUserDetails/${id}`);
};

export const listOfUsers = async () => {
    return await apiClient.get(`/api/Authentication/GetUserList/`);
};