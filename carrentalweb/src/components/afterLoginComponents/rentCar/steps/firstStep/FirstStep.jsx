import React, { useEffect, useState } from 'react';
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
import useStyles from './FirstStepStyles';
import OpacityIcon from '@material-ui/icons/Opacity';
import Grid from '@material-ui/core/Grid';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import SettingsIcon from '@material-ui/icons/Settings';
import EventSeatIcon from '@material-ui/icons/EventSeat';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ListOfCars from '../../../listOfCars/ListOfCars';
const FirstStep = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const userId = useSelector(userIdSelector);
  const [selectedCar, setSelectedCar] = useState(null);
  const [selectedCarDetails, setSelectedCarDetail] = useState(null);
  const [selectedCarDetailsCard, setSelectedCarDetailCard] = useState(null);
  const [selectedCarPricing, setSelectedCarPricing] = useState(null);
  const [allDetails, setAllDetails] = useState([]);

  async function selectCar() {
    try {
      const resp = await dispatch(rentCarAction(props.choosenCar));
      setSelectedCar(resp);
    } catch (error) {
      console.log(error);
    }
  }

  async function selectedCarDetailsRequest(id) {
    try {
      const resp = await copyCarsList(id);
      const car = resp.data.find((x) => x.isRented == false);
      setSelectedCarDetail(car);
      const resp2 = await listCar(car.carId);
      setSelectedCarDetailCard(resp2.data);
      const resp3 = await getPricingCar(car.carId);
      setSelectedCarPricing(resp3.data[0].pricePerDay);
      setAllDetails((allDetails) => [...allDetails, car]);
      setAllDetails((allDetails) => [...allDetails, resp2.data]);
      setAllDetails((allDetails) => [...allDetails, resp3.data[0].pricePerDay]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    selectCar();
  }, [props]);

  useEffect(() => {
    if (selectedCar != null) {
      selectedCarDetailsRequest(selectedCar);
    }
  }, [selectedCar]);

  useEffect(() => {
    if (props.giveDetails) {
      props.giveDetails(allDetails);
    }
  }, [allDetails]);

  return (
    <Grid container spacing={0} direction="column" alignItems="center" justify="center">
      {selectedCarDetailsCard && selectedCarDetails && (
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={selectedCarDetailsCard.image}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="h2">
                {selectedCarDetailsCard.brand} {selectedCarDetailsCard.model}
              </Typography>
              <Grid item className={classes.cardata}>
                <Typography className={classes.carinfo}>
                  <OpacityIcon></OpacityIcon> {selectedCarDetailsCard.color}
                </Typography>
              </Grid>
              <Grid item className={classes.cardata}>
                <Typography className={classes.carinfo}>
                  <CalendarTodayIcon></CalendarTodayIcon> {selectedCarDetailsCard.year}
                </Typography>
              </Grid>
              <Grid item className={classes.cardata}>
                <Typography className={classes.carinfo}>
                  <SettingsIcon></SettingsIcon> {selectedCarDetailsCard.gearbox}
                </Typography>
              </Grid>
              <Grid item className={classes.cardata}>
                <Typography className={classes.carinfo}>
                  <EventSeatIcon></EventSeatIcon> {selectedCarDetailsCard.seats}
                </Typography>
              </Grid>
              <Grid item className={classes.cardata}>
                <Typography className={classes.carinfo}>
                  <VpnKeyIcon></VpnKeyIcon> {selectedCarDetails.registrationNumber}
                </Typography>
              </Grid>
              <Grid item className={classes.cardata}>
                <Typography className={classes.carinfo}>
                  <AttachMoneyIcon></AttachMoneyIcon> {selectedCarPricing}ZŁ/Dzień
                </Typography>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
      {!selectedCar && <ListOfCars></ListOfCars>}
    </Grid>
  );
};

export default FirstStep;
