import {
    apiClient
} from "./apiClient";

export const listOfUsers = async () => {
            return await apiClient.get(`/api/Cars`);