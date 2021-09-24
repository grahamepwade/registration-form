import React, { useState } from 'react'

import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import TextField from '@mui/material/TextField'

import makeStyles from '@mui/styles/makeStyles'

import { validCity } from 'helpers'
 
const useStyles = makeStyles((theme) => ({
    cityInputStyle: {
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


const CityInput = ({ handleCity }) => {
    const [city, setCity] = useState({ errorText: '', value: '' })

    const classes = useStyles()

    const handleCityChange = (input) => {
        let cityObj = {...city}
        cityObj.errorText = input.match(validCity) === null && input !== '' ? 'Invalid input' : ''
        cityObj.value = input

        setCity(cityObj)
    }

    const handleOnBlur = () => {
        let cityObj = {...city}
        cityObj.errorText = cityObj.value === '' ? cityObj.errorText = 'Cannot be empty' : cityObj.errorText        
        
        setCity(cityObj)
        handleCity(cityObj)
    }

    return (
        <FormControl className={classes.cityInputStyle}>
            <FormLabel className={classes.formLabelStyle} component='legend'>City</FormLabel>
            <TextField 
                fullWidth={true}
                className={classes.textFieldInputStyle}
                inputProps={{style: {fontSize: 'small'}}}
                size='small' 
                label='' 
                id='city' 
                type='text' 
                placeholder='City'
                value={city.value}
                onChange={e => handleCityChange(e.target.value)}
                onBlur={handleOnBlur}
                helperText={city.errorText}
            />
        </FormControl>
    )
}

export default CityInput