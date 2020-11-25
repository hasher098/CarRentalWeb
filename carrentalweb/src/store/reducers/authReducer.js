const initialState = { isAuthUser: false, userId: 0, userName: "", userRole:"" };

export default function authReducer(
  state=initialState,
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
        userRole: action.role,
      };

    default:
      return state;
  }
}
