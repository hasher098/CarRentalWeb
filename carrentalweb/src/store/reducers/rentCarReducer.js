const initialState = { carCopyId:0 };

export default function rentCarReducer(
  state,
  action
) {
  switch (action.type) {
    case "LOGOUT_ACTION":
      localStorage.clear();
      return initialState;
    case "CHOOSE_CAR":
      return {
        ...state,
        carCopyId:action.carCopyId
      };

    default:
      return initialState;
  }
}
