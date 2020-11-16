
import {loginRequest} from "../../api/loginClient";

export const loginAction = (
userName,password
) => async (
  dispatch
) => {
  try {

    const data = await loginRequest(userName,password);
    await dispatch({ type: "LOGIN_ACTION", userId: data.data.id, user: data.data.user});
    return true;
  } catch (error) {
    return false;
  }
};