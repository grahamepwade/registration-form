import React, { useState } from 'react'

import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import TextField from '@mui/material/TextField'
import ToggleButton from '@mui/material/ToggleButton'

import makeStyles from '@mui/styles/makeStyles'

import { formatPhoneNumber } from 'helpers'

const useStyles = makeStyles((theme) => ({
    phoneInputStyle: {
        width: '100%',
        color: theme.palette.secondary.main,
    },
    formLabelStyle: {
        paddingBottom: '5px',
        color: theme.palette.secondary.main
    },
    adornmentStyle: {
        fontSize: 'small',
        height: '36px',
        marginLeft: '-14px',
        marginRight: '14px',
        backgroundColor: 'rgba(249, 250, 251, 1) !important',
        color: 'rgba(126, 131, 142, 1) !important',
        border: 0,
        borderRight: '1px solid rgba(0, 0, 0, 0.23)',
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    },
    textFieldInputStyle: {
        '& p': {
            color: 'red',
            marginLeft: 0
        }
    }
}))


const PhoneInput = ({ handlePhone }) => {
    const [phone, setPhone] = useState({ errorText: '', value: '' })

    const classes = useStyles()

    const handlePhoneChange = (input) => {
        let phoneObj = {...phone}
        phoneObj.value = input.replace(/[^0-9]/g, '')
        phoneObj.errorText = phoneObj.value.length > 10 ? 'Enter a valid phone number' : ''

        setPhone(phoneObj)
    }

    const handleOnBlur = () => {
        let phoneObj = {...phone}

        if (phoneObj.value === '') {
            phoneObj.errorText = 'Cannot be empty'
        }
        else if (phoneObj.value.length !== 10) {
            phoneObj.errorText = 'Enter a valid phone number'
        }
        else {
            phoneObj.errorText = ''
        }
        
        setPhone(phoneObj)
        handlePhone(phoneObj)
    }

    return (
        <FormControl className={classes.phoneInputStyle}>
            <FormLabel className={classes.formLabelStyle} component='legend'>Phone number</FormLabel>
                <TextField 
                    className={classes.textFieldInputStyle}
                    InputProps={{
                        startAdornment: 
                        <ToggleButton
                            value='check'
                            selected={true}
                            className={classes.adornmentStyle}
                        >
                            +1
                        </ToggleButton>,
                        style: {fontSize: 'small'}
                    }}
                    fullWidth={true}
                    size='small' 
                    label='' 
                    id='phone-number' 
                    type='text' 
                    placeholder='(012) 345-6789'
                    value={formatPhoneNumber(phone.value)}
                    onChange={e => handlePhoneChange(e.target.value)}
                    onBlur={handleOnBlur}
                    helperText={phone.errorText}
                />
        </FormControl>
    )
}

export default PhoneInput