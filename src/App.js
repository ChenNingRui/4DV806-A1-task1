import './App.css';
import React, { useState } from 'react';
import { Box, Grid, Paper, Typography } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

import jsonData from './resource/BillionDollars.json';
import CustomSunburst from './components/CustomSunburst';
// import CustomRangeSlider from './components/CustomRangeSlider';
import CustomSwitch from './components/CustomSwitch';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop: '10px',
    width: '150px',
  },
}));

function App() {
  const classes = useStyles();

  let [noInherit, setNoInherit] = useState(false);
  let [inherit, setInherit] = useState(false);
  // let [targetName, setTargetName] = useState('Name');
  // let [targetLink, setTargetLink] = useState('Link');

  return (
    <Box className="App">
      <Box style={{ display: 'flex', float: 'left' }}>
        <CustomSunburst
          dataset={jsonData}
          noInheritStatus={noInherit}
          inheritStatus={inherit}
          noInheritSet={setNoInherit}
          inheritSet={setInherit}
        // targetNameSet={setTargetName}
        // targetLinkSet={setTargetLink}
        />
      </Box>
      <Box style={{ marginTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Grid
          className={classes.root}
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={1}>
          {/* <Grid container item >
            <Paper className={classes.paper}>
              <Typography style={{ display: 'flex', float: 'left' }}>
                Data Range
              </Typography>
              <CustomRangeSlider />
            </Paper>
          </Grid> */}
          <Grid container item >
            <Paper className={classes.paper}>
              <Typography style={{ display: 'flex', float: 'left' }}>
                No Inherit
              </Typography>
              <CustomSwitch setting={setNoInherit} status={noInherit} />
            </Paper>
          </Grid>
          <Grid container item >
            <Paper className={classes.paper}>
              <Typography style={{ display: 'flex', float: 'left' }}>
                Inherit
              </Typography>
              <CustomSwitch setting={setInherit} status={inherit} />
            </Paper>
          </Grid>
          {/* <Grid container item >
            <Paper className={classes.paper}>
              <Typography style={{ float: 'left' }}>
                {targetName}
              </Typography>
              <br />
              <Link
                component="button"
                variant="body2"
                onClick={() => {
                  console.info("I'm a button.");
                }}>
                {targetLink}
              </Link>
            </Paper>
          </Grid> */}
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
