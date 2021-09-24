import React, { useState } from 'react'

import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import FormLabel from '@mui/material/FormLabel'
import TextField from '@mui/material/TextField'

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker'
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import makeStyles from '@mui/styles/makeStyles'

import { getDate, getMonth, getYear } from 'date-fns'

import { validDOB } from 'helpers'

const useStyles = makeStyles((theme) => ({
    dateInputStyle: {
        width: '100%',
        color: theme.palette.secondary.main,
    },
    formLabelStyle: {
        paddingBottom: '5px',
        color: theme.palette.secondary.main
    },
    datePickerInputStyle: {
        height: '36px',
        fontSize: 'small',
    }
}))


const DOBInput = ({ handleDOB }) => {
    var today = new Date()
    var cutOffDate = new Date(getYear(today) - 18, getMonth(today), getDate(today))

    const [date, setDate] = useState({ errorText: '', value: cutOffDate })

    const classes = useStyles()

    const handleDateChange = (input) => {
        let dateObj = {...date}
        dateObj.value = input

        dateObj.errorText = validDOB(dateObj.value) ? '' : 'Must be 18 or older'

        setDate(dateObj)
        handleDOB(dateObj)
    }

    return (
        <FormControl className={classes.dateInputStyle}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <FormLabel className={classes.formLabelStyle} component='legend'>Date of birth</FormLabel>
                <DesktopDatePicker
                    value={date.value}
                    InputProps={{className: classes.datePickerInputStyle}}
                    onChange={handleDateChange}
                    allowSameDateSelection={true}
                    renderInput={(params) => <TextField {...params} />}
                />
                <FormHelperText 
                    style={{
                        display: date.errorText === '' ? 'none' : 'block',
                        color: 'red',
                        marginLeft: 0
                    }}
                >
                    Must be 18yrs or older
                </FormHelperText>
            </LocalizationProvider>
        </FormControl>
    )
}

export default DOBInput