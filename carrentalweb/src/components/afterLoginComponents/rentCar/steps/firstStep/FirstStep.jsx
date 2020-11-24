import React, { useEffect, useState } from 'react';
import { rentCarAction } from '../../../../../store/actions/rentActions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { userIdSelector } from '../../../../../store/selectors/authSelector';
const FirstStep = (props) => {
  const dispatch = useDispatch();
  const userId = useSelector(userIdSelector);
  async function loginUser() {
    try {
      const resp = await dispatch(rentCarAction(userId, props.choosenCar, new Date(), new Date()));
      console.log('TU');
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loginUser();
  }, [props]);
  return (
    <div>
      <div>{props.choosenCar}</div>
    </div>
  );
};

export default FirstStep;
