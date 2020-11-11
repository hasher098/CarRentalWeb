import { Route, Redirect } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';
import { authUserSelector } from '../../../store/selectors/authSelector';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuth = useSelector(authUserSelector);
  return (
    <Route
      {...rest}
      render={(props) => (isAuth ? <Component {...props} /> : <Redirect to="/"></Redirect>)}
    />
  );
};

export default PrivateRoute;
