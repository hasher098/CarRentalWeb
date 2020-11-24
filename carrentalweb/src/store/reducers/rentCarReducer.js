const initialState = { carCopyId:0 };

export default function rentCarReducer(
  state=initialState,
  action
) {
  switch (action.type) {

    case "CHOOSE_CAR":
      return {
        ...state,
        carCopyId:action.carCopyId
      };

    default:
      return state;
  }
}
