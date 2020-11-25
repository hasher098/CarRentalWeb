import React, { useState, useEffect } from 'react';
import useStyles from './RentCarStyles';
import { useSelector } from 'react-redux';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DataForm from '../dataForm/DataForm';
import FirstStep from './steps/firstStep/FirstStep';
import ThirdStep from './steps/thirdStep/ThirdStep';
import DateStep from './steps/dateStep/DateStep';

const RentCar = ({ match }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState(new Set());
  const [details, setDetails] = useState();
  const [dates1, setDates1] = useState();
  const [dates2, setDates2] = useState();
  const steps = getSteps();
  const {
    params: { carid },
  } = match;
  const classes = useStyles();

  function getSteps() {
    return ['Wybierz samochód', 'Sprawdź/Uzupełnij Dane', 'Wprowadź Date', 'Podsumowanie'];
  }

  function getDetails(dane) {
    setDetails(dane);
  }
  function getDates1(dane) {
    setDates1(dane);
  }
  function getDates2(dane) {
    setDates2(dane);
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <FirstStep choosenCar={carid} giveDetails={getDetails} />;
      case 1:
        return <DataForm />;
      case 2:
        return <DateStep giveDates1={getDates1} giveDates2={getDates2} />;
      case 3:
        return <ThirdStep allDetails={details} date1={dates1} date2={dates2} />;
      default:
        return 'Unknown step';
    }
  }

  const totalSteps = () => {
    return getSteps().length;
  };
  const completedSteps = () => {
    return completed.size;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed
          // find the first step that has been completed
          steps.findIndex((step, i) => !completed.has(i))
        : activeStep + 1;

    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = new Set(completed);
    newCompleted.add(activeStep);
    setCompleted(newCompleted);
    if (completed.size !== totalSteps()) {
      handleNext();
    }
  };

  function isStepComplete(step) {
    return completed.has(step);
  }

  return (
    <div className={classes.root}>
      <Stepper alternativeLabel nonLinear activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const buttonProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepButton
                onClick={handleStep(index)}
                completed={isStepComplete(index)}
                {...buttonProps}
              >
                {label}
              </StepButton>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <div>Ostatni krok</div>
        ) : (
          <div>
            <Typography component={'div'} className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div className={classes.buttonContainer}>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Cofnij
              </Button>
              {activeStep < 3 ? (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  onClick={handleComplete}
                  className={classes.button}
                >
                  {activeStep != 3 ? <>Dalej </> : <>Wyślij</>}
                </Button>
              ) : (
                <></>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RentCar;
