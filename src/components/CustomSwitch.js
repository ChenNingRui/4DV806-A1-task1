import React from 'react';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default function CustomSwitch(props) {
    let { status, setting } = props;

    let handleChange = (event) => {
        setting(event.target.checked);
    };

    return (
        <Typography component="div">
            <Grid component="label" container alignItems="center" spacing={1}>
                <Grid item>Off</Grid>
                <Grid item>
                    <Switch checked={status} onChange={handleChange} name="checked" />
                </Grid>
                <Grid item>On</Grid>
            </Grid>
        </Typography>
    );
}
