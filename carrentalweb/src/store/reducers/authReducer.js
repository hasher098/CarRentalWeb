const initialState = { isAuthUser: false, userId: 0, userName: "" };

export default function authReducer(
  state,
  action
) {
  switch (action.type) {
    case "LOGOUT_ACTION":
      localStorage.clear();
      return initialState;
    case "LOGIN_ACTION":
      return {
        ...state,
        isAuthUser: true,
        userId: action.userId,
        userName: action.user,
      };

    default:
      return initialState;
  }
}
