
import {rentCar} from "../../api/carClient";

export const rentCarAction = (
carCopyId
) => async (
  dispatch
) => {
  try {

    await dispatch({ type: "CHOOSE_CAR", car:carCopyId});
    return carCopyId;
  } catch (error) {
    return false;
  }
};