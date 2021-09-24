import React from 'react'

import Grid from '@mui/material/Grid'
import makeStyles from '@mui/styles/makeStyles'

import BackgroundImage from './BackgroundImage'
import Form from './Form'


const useStyles = makeStyles((theme) => ({
    gridContainer: {
        height: '-webkit-fill-available',
        color: theme.palette.secondary.main,
    }
}))

const RegistrationPage = () => {

    const classes = useStyles()

    return (
        <Grid container className={classes.gridContainer}>
            <Grid item xs={6}>
                <BackgroundImage />
            </Grid>
            <Grid item xs={6}>
                <Form />
            </Grid>
        </Grid>
    )
}

export default RegistrationPage