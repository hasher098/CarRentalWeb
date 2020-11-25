import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@material-ui/core';
import useStyles from './SliderStyles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import OpacityIcon from '@material-ui/icons/Opacity';
import Grid from '@material-ui/core/Grid';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import SettingsIcon from '@material-ui/icons/Settings';
import EventSeatIcon from '@material-ui/icons/EventSeat';
const Slider = (props) => {
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    console.log(props.dane);
  }, [props.dane]);
  const classes = useStyles();
  return (
    <Carousel interval={3000}>
      {props.dane.map((item, i) => (
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media} image={item.image} title="Contemplative Reptile" />
            <CardContent>
              <Typography gutterBottom variant="h4" component="h2">
                {item.brand} {item.model}
              </Typography>
              <Grid item className={classes.cardata}>
                <Typography className={classes.carinfo}>
                  <OpacityIcon></OpacityIcon> {item.color}
                </Typography>
              </Grid>
              <Grid item className={classes.cardata}>
                <Typography className={classes.carinfo}>
                  <CalendarTodayIcon></CalendarTodayIcon> {item.year}
                </Typography>
              </Grid>
              <Grid item className={classes.cardata}>
                <Typography className={classes.carinfo}>
                  <SettingsIcon></SettingsIcon> {item.gearbox}
                </Typography>
              </Grid>
              <Grid item className={classes.cardata}>
                <Typography className={classes.carinfo}>
                  <EventSeatIcon></EventSeatIcon> {item.seats}
                </Typography>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Carousel>
  );
};

export default Slider;
