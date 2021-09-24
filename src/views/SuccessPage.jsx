import React from 'react'

import Container from '@mui/material/Container'

import makeStyles from '@mui/styles/makeStyles'

const useStyles = makeStyles((theme) => ({
    containerStyle: {
        color: theme.palette.secondary.main,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '-webkit-fill-available'
    },
}))

const SuccessPage = () => {
    const classes = useStyles()

    return (
        <Container className={classes.containerStyle}>
            Thank you for your submittion. You will receive your free sample in the mail within 2 weeks.
        </Container>
    )
}

export default SuccessPage