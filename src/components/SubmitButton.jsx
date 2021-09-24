import React from 'react'

import Button from '@mui/material/Button'

import makeStyles from '@mui/styles/makeStyles'

const useStyles = makeStyles((theme) => ({
    submitButtonStyles: {
        color: theme.palette.secondary.main,
        backgroundColor: theme.palette.primary.main,
        marginTop: '10px',
        textTransform: 'none',
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
        }
    }
}))

const SubmitButton = ({handleSubmitClick}) => {
    const classes = useStyles()

    return (
        <Button
            className={classes.submitButtonStyles}
            fullWidth={true}
            variant='contained'
            onClick={handleSubmitClick}
        >
            Get my free samples
        </Button>
    )
}

export default SubmitButton