
import {rentCar} from "../../api/carClient";

export const rentCarAction = (
userId,carCopyId,RentDate,ReturnDate
) => async (
  dispatch
) => {
  try {

    const data = await rentCar(userId,carCopyId,RentDate,ReturnDate);
    console.log("DATA");
    console.log(data);
    await dispatch({ type: "CHOOSE_CAR", carCopyId:carCopyId});
    return true;
  } catch (error) {
    return false;
  }
};