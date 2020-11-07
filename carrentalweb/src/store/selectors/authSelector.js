import { createSelector } from "reselect";

const authSelector = (state) => state.auth;
const userSelector = (state) => state.auth;

export const authUserSelector = createSelector(
    authSelector,
    (state) => state.isAuthUser
  );

export const userNameSelector = createSelector(
    userSelector,
    (state)=>state.userName
);