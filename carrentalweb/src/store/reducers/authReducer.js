const initialState = { isAuthUser: false, userId: 0, userName: "", userRole:"" };

export default function authReducer(
  state,
  action
) {
  switch (action.type) {
    case "LOGOUT_ACTION":
      localStorage.clear();
      return initialState;
    case "LOGIN_ACTION":
        console.log(action);
      return {
        ...state,
        isAuthUser: true,
        userId: action.userId,
        userName: action.user,
        userRole: action.role,
      };

    default:
      return initialState;
  }
}
