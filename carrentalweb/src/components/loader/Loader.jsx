import React from 'react';
import { Button, CircularProgress } from '@material-ui/core';
import useStyles from './LoaderStyles';

const Loader = (props) => {
  const { isLoading, ...buttonProps } = props;
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Button {...buttonProps} disabled={props.disabled || isLoading}>
        {props.children}
      </Button>
      {isLoading && <CircularProgress className={classes.loader} size={24} />}
    </div>
  );
};

export default Loader;
