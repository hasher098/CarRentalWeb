import React from 'react';
import Grid from '@material-ui/core/Grid';
import { AppBar, Typography, Box } from '@material-ui/core';
import TopBar from '../topBar/TopBar.jsx';
import TitlePart from '../titlePart/TitlePart';
import FeaturePart from '../featurePart/FeaturePart';
import DescPart from '../descPart/DescPart.jsx';
import FootPart from '../footPart/FootPart.jsx';
import ListOfCars from '../afterLoginComponents/listOfCars/ListOfCars';
import Content from './Content';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { authUserSelector } from '../../store/selectors/authSelector';
import { useSelector } from 'react-redux';
import PrivateRoute from '../helpers/privateRoute/PrivateRoute';
import ProfilePage from '../afterLoginComponents/profilePage/ProfilePage';
import CarDetails from '../afterLoginComponents/carDetails/CarDetails';
const MainPage = () => {
  const isAuth = useSelector(authUserSelector);

  return (
    <Router>
      {!isAuth ? (
        <>
          <TopBar></TopBar>
          <Switch>
            <Route path="/" exact component={Content} />
            <PrivateRoute path="/additionalInfo" component={DescPart} />
          </Switch>
        </>
      ) : (
        <>
          <TopBar></TopBar>
          <Switch>
            <PrivateRoute path="/" exact component={ListOfCars} />
            <PrivateRoute path="/additionalInfo" component={DescPart} />
            <PrivateRoute path="/profile" component={ProfilePage} />
            <PrivateRoute exact path="/cardetails/:carid" component={CarDetails} />
          </Switch>
        </>
      )}
    </Router>
  );
};

export default MainPage;
