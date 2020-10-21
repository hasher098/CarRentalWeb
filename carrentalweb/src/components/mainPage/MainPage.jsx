import React from 'react';
import Grid from '@material-ui/core/Grid';
import { AppBar, Typography, Box } from '@material-ui/core';
import TopBar from '../topBar/TopBar.jsx';
import TitlePart from '../titlePart/TitlePart';
import FeaturePart from '../featurePart/FeaturePart';
import DescPart from '../descPart/DescPart.jsx';
import FootPart from '../footPart/FootPart.jsx';
const MainPage = () => {
  return (
    <React.Fragment>
      <TopBar></TopBar>
      <TitlePart></TitlePart>
      <FeaturePart></FeaturePart>
      <DescPart></DescPart>
      <FootPart></FootPart>
    </React.Fragment>
  );
};

export default MainPage;
