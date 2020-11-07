export const logoutAction = () => async (dispatch) => {
    await dispatch({ type: "LOGOUT_ACTION" });
  };
  