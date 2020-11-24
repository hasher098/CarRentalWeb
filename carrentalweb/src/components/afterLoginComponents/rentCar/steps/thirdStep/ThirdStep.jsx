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
const ThirdStep = (props) => {
  const [data, setData] = useState();
  const classes = useStyles();
  useEffect(() => {
    setData(props.allDetails);
  }, [props]);
  return (
    <Grid container spacing={0} direction="column" alignItems="center" justify="center">
      {data && (
        <Grid container spacing={0} direction="column" alignItems="center" justify="center">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={data[1].image}
                title="Contemplative Reptile"
              />
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
                  TOMASZ KROTOSZ
                </Typography>
                <Grid item className={classes.cardata}>
                  <Typography className={classes.carinfo}>PESEL:</Typography>
                </Grid>
                <Grid item className={classes.cardata}>
                  <Typography className={classes.carinfo}>NR DOWODU:</Typography>
                </Grid>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      )}
      {!data && <div>elo</div>}
    </Grid>
  );
};

export default ThirdStep;
