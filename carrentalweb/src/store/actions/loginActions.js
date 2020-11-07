
import {loginRequest} from "../../api/loginClient";

export const loginAction = (
userName,password
) => async (
  dispatch
) => {
  try {

    const data = await loginRequest(userName,password);
    console.log(data);
    await dispatch({ type: "LOGIN_ACTION", userId: 1, user: data.data.user});
    return true;
  } catch (error) {
    return false;
  }
};