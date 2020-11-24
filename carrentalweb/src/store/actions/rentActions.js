
import {rentCar} from "../../api/carClient";

export const rentCarAction = (
carCopyId
) => async (
  dispatch
) => {
  try {

    // const data = await rentCar(userId,carCopyId,RentDate,ReturnDate);
    // console.log("DATA");
    // console.log(data);
    await dispatch({ type: "CHOOSE_CAR", car:carCopyId});
    return carCopyId;
  } catch (error) {
    return false;
  }
};