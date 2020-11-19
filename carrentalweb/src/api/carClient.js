import {
    apiClient
} from "./apiClient";

export const listOfCarsRequest = async () => {
    return await apiClient.get(`/api/Cars`);

};

export const listCar = async (id) => {
    return await apiClient.get(`/api/Cars/${id}`);

};

export const newCar = async (clasa, brand, model, year, color, engineCapacity, seats, gearbox, trunkCapacity, roofRack, bodyType, image) => {
    const resp = await apiClient.post('/api/Cars', {
        class: clasa,
        brand: brand,
        model: model,
        year: year,
        color: color,
        engineCapacity: engineCapacity,
        seats: seats,
        gearbox: gearbox,
        trunkCapacity: trunkCapacity,
        roofRack: roofRack,
        bodyType: bodyType,
        image: image
    });
    return resp;
};