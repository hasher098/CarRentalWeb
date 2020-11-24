
import {rentCar} from "../../api/carClient";

export const loginAction = (
userId,carCopyId,RentDate,ReturnDate
) => async (
  dispatch
) => {
  try {

    const data = await rentCar(userId,carCopyId,RentDate,ReturnDate);
    await dispatch({ type: "LOGIN_ACTION", userId:1});
    return true;
  } catch (error) {
    return false;
  }
};