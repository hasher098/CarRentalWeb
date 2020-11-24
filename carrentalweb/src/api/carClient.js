import {
    apiClient
} from "./apiClient";

export const listOfCarsRequest = async () => {
    return await apiClient.get(`/api/Cars`);

};

export const listOfAvCarsRequest = async () => {
    return await apiClient.get(`/api/Cars/AvailableCars`);

};
export const listOfCopyRequest = async () => {
    return await apiClient.get(`/api/CarCopies`);
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

export const newCopy = async (regNum, idCar, isRented) => {
    const resp = await apiClient.post('api/CarCopies', {
        registrationNumber: regNum,
        carId: idCar,
        isRented: isRented
    });
    return resp;
}
export const carDelete = async (carid) => {
    const resp = await apiClient.delete(`api/Cars/${carid}`
    );
    return resp;
}
export const copyDelete = async (copiesID) => {
    const resp = await apiClient.delete(`api/CarCopies/${copiesID}`, {
        id: copiesID,
    });
    return resp;
}

export const rentCar = async (userId,carCopyId,RentDate,ReturnDate)=>{
    const resp = await apiClient.post(`api/Rents/RentCar`,{
        userId,carCopyId,RentDate,ReturnDate
    });
    return resp;
}

export const copyCarsList = async(id)=>{
    const resp = await apiClient.get(`/api/CarCopies/GetListOfCarCopies/${id}`,{
        copyId:id,
    });
    return resp;
}

export const getPricingCar = async(id)=>{
    const resp = await apiClient.get(`/api/Pricings/PricingByCarCopyId/${id}`,{
        id:id
    });
    return resp;
}