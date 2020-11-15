import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './CarItemStyles';
import autko from '../../../../autko.jpg';
import OpacityIcon from '@material-ui/icons/Opacity';
import Grid from '@material-ui/core/Grid';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import SettingsIcon from '@material-ui/icons/Settings';
import EventSeatIcon from '@material-ui/icons/EventSeat';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
const CarItem = (props) => {
  const classes = useStyles();
  const data = props.dane;
  return (
    (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.dane.image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="h2">
              {props.dane.brand} {props.dane.model} 
            </Typography>
            <Grid item className={classes.cardata}>
              <Typography className={classes.carinfo}>
                <OpacityIcon></OpacityIcon> {props.dane.color}
              </Typography>
            </Grid>
            <Grid item className={classes.cardata}>
              <Typography className={classes.carinfo}>
                <CalendarTodayIcon></CalendarTodayIcon> {props.dane.year}
              </Typography>
            </Grid>
            <Grid item className={classes.cardata}>
              <Typography className={classes.carinfo}>
                <SettingsIcon></SettingsIcon> {props.dane.gearbox}
              </Typography>
            </Grid>
            <Grid item className={classes.cardata}>
              <Typography className={classes.carinfo}>
                <EventSeatIcon></EventSeatIcon> {props.dane.seats}
              </Typography>
            </Grid>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Wynajmij
          </Button>
          <Link 
            to={'/cardetails/${props.dane.id}'
              // pathname: {'/cardetails/${data.id}'},
              // carDetails: {data},
            }
          >
            <Button size="small" color="primary">
              {' '}
              Szczegóły
            </Button>
          </Link>
        </CardActions>
      </Card>
    )
  );
};

export default CarItem;
