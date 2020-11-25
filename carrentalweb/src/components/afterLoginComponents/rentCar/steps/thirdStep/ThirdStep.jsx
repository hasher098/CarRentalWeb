import React, { useState, useEffect } from 'react';
import { rentCarAction } from '../../../../../store/actions/rentActions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { userIdSelector } from '../../../../../store/selectors/authSelector';
import { copyCarsList } from '../../../../../api/carClient';
import { listCar } from '../../../../../api/carClient';
import { getPricingCar } from '../../../../../api/carClient';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './ThirdStepStyles';
import OpacityIcon from '@material-ui/icons/Opacity';
import Grid from '@material-ui/core/Grid';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import SettingsIcon from '@material-ui/icons/Settings';
import EventSeatIcon from '@material-ui/icons/EventSeat';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ListOfCars from '../../../listOfCars/ListOfCars';
import { userDetails } from '../../../../../api/userClient';
import { rentCarRequest } from '../../../../../api/rentClient';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
const ThirdStep = (props) => {
  const [data, setData] = useState();
  const classes = useStyles();
  const userId = useSelector(userIdSelector);
  const [userDetailsState, setUserDetailsState] = useState();
  useEffect(() => {}, [props]);

  async function userDet(userId) {
    const response = await userDetails(userId);
    setUserDetailsState(response.data);
  }
  useEffect(() => {
    userDet(userId);
    setData(props.allDetails);
    console.log(props);
  }, []);

  async function sendRentRequest() {
    try {
      const resp = await rentCarRequest(userId, props.allDetails[0].id, props.date1, props.date2);
    } catch (Error) {
      console.log(Error);
    }
  }

  return (
    <Grid container spacing={0} direction="column" alignItems="center" justify="center">
      {data && userDetailsState && (
        <Grid container spacing={0} direction="column" alignItems="center" justify="center">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia className={classes.media} image={data[1].image} />
              <CardContent>
                <Typography gutterBottom variant="h4" component="h2">
                  {data[1].brand} {data[1].model}
                </Typography>
                <Grid item className={classes.cardata}>
                  <Typography className={classes.carinfo}>
                    <OpacityIcon></OpacityIcon> {data[1].color}
                  </Typography>
                </Grid>
                <Grid item className={classes.cardata}>
                  <Typography className={classes.carinfo}>
                    <CalendarTodayIcon></CalendarTodayIcon> {data[1].year}
                  </Typography>
                </Grid>
                <Grid item className={classes.cardata}>
                  <Typography className={classes.carinfo}>
                    <SettingsIcon></SettingsIcon> {data[1].gearbox}
                  </Typography>
                </Grid>
                <Grid item className={classes.cardata}>
                  <Typography className={classes.carinfo}>
                    <EventSeatIcon></EventSeatIcon> {data[1].seats}
                  </Typography>
                </Grid>
                <Grid item className={classes.cardata}>
                  <Typography className={classes.carinfo}>
                    <VpnKeyIcon></VpnKeyIcon> {data[0].registrationNumber}
                  </Typography>
                </Grid>
                <Grid item className={classes.cardata}>
                  <Typography className={classes.carinfo}>
                    <AttachMoneyIcon></AttachMoneyIcon> {data[2]}ZŁ/Dzień
                  </Typography>
                </Grid>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card className={classes.root}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h4" component="h2">
                  {userDetailsState.firstName} {userDetailsState.lastName}
                </Typography>
                <Grid item className={classes.cardata}>
                  <Typography className={classes.carinfo}>
                    PESEL: {userDetailsState.pesel}
                  </Typography>
                </Grid>
                <Grid item className={classes.cardata}>
                  <Typography className={classes.carinfo}>
                    NR DOWODU: {userDetailsState.iDcardNumber}
                  </Typography>
                </Grid>
                <Grid item className={classes.cardata}>
                  <Typography className={classes.carinfo}>
                    ADRES: {userDetailsState.address}
                  </Typography>
                </Grid>
                {props.date1 && props.date2 && (
                  <div>
                    <Grid item className={classes.cardata}>
                      <Typography className={classes.carinfo}>OD: {props.date1}</Typography>
                    </Grid>
                    <Grid item className={classes.cardata}>
                      <Typography className={classes.carinfo}>DO: {props.date2}</Typography>
                    </Grid>
                  </div>
                )}
              </CardContent>
            </CardActionArea>
          </Card>
          <Link style={{ textDecoration: 'none' }} to={'/afterRent'}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={sendRentRequest}
            >
              Wyslij Wniosek
            </Button>
          </Link>
        </Grid>
      )}
      {!data && <div>problem</div>}
    </Grid>
  );
};

export default ThirdStep;
