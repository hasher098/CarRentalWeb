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
import NewCar from '../afterLoginComponents/newCar/NewCar';
import AddCopy from '../afterLoginComponents/addCopy/AddCopy';
import CarDelete from '../afterLoginComponents/carDelete/CarDelete';
import CopyDelete from '../afterLoginComponents/copyDelete/CopyDelete';
import ListUsers from '../afterLoginComponents/listUsers/ListUsers';
import RentList from '../afterLoginComponents/rentList/RentList';

import RentCar from '../afterLoginComponents/rentCar/RentCar.jsx';
import LoginWindow from '../loginWindow/LoginWindows.jsx';

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
            <PrivateRoute exact path="/RentCar" component={RentCar} />
            <PrivateRoute exact path="/RentCar/:carid" component={RentCar} />
            <PrivateRoute exact path="/newcar" component={NewCar} />
            <PrivateRoute exact path="/addcopy" component={AddCopy} />
            <PrivateRoute exact path="/cardelete" component={CarDelete} />
            <PrivateRoute exact path="/copydelete" component={CopyDelete} />
            <PrivateRoute exact path="/listusers" component={ListUsers} />
            <PrivateRoute exact path="/rentlist" component={RentList} />
          </Switch>
        </>
      )}
    </Router>
  );
};

export default MainPage;
