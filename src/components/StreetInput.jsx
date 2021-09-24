import React, { useState } from 'react'

import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import TextField from '@mui/material/TextField'

import makeStyles from '@mui/styles/makeStyles'

import { validStreet } from 'helpers'

const useStyles = makeStyles((theme) => ({
    streetInputStyle: {
        width: '100%',
        color: theme.palette.secondary.main,
    },
    formLabelStyle: {
        paddingBottom: '5px',
        color: theme.palette.secondary.main
    },
    textFieldInputStyle: {
        '& p': {
            color: 'red',
            marginLeft: 0
        }
    }
}))


const StreetInput = ({ handleStreetAddress }) => {
    const [street, setStreet] = useState({ errorText: '', value: '' })

    const classes = useStyles()

    const handleStreetChange = (input) => {
        let streetObj = {...street}
        streetObj.value = input

        streetObj.errorText = (input.match(validStreet) === null && input !== '') ? 'Invalid input' : ''        

        setStreet(streetObj)
    }

    const handleOnBlur = () => {
        let streetObj = {...street}

        if (streetObj.value === '') {
            streetObj.errorText = 'Cannot be empty'
        }
        else {
            streetObj.errorText = ''
        }
        
        setStreet(streetObj)
        handleStreetAddress(streetObj)
    }

    return (
        <FormControl className={classes.streetInputStyle}>
            <FormLabel className={classes.formLabelStyle} component='legend'>Street address</FormLabel>
            <TextField 
                className={classes.textFieldInputStyle}
                inputProps={{style: {fontSize: 'small'}}}
                fullWidth={true}
                size='small' 
                label='' 
                id='street-address' 
                type='text' 
                placeholder='Street address'
                value={street.value}
                onChange={e => handleStreetChange(e.target.value)}
                onBlur={handleOnBlur}
                helperText={street.errorText}
            />
        </FormControl>
    )
}

export default StreetInput