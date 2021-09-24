import React, { useState } from 'react'

import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import TextField from '@mui/material/TextField'

import makeStyles from '@mui/styles/makeStyles'

import validator from 'validator'

const useStyles = makeStyles((theme) => ({
    emailInputStyle: {
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


const EmailInput = ({ handleEmailAddress }) => {
    const [email, setEmail] = useState({ errorText: '', value: '' })

    const classes = useStyles()

    const handleEmailChange = (input) => {
        let emailObj = {...email}
        emailObj.value = input

        setEmail(emailObj)
    }

    const handleEmailBlur = () => {
        let emailObj = {...email}

        if (emailObj.value === '') {
            emailObj.errorText = 'Cannot be empty'
        }
        else if (validator.isEmail(emailObj.value)) {
            emailObj.errorText = ''
        }
        else {
            emailObj.errorText = 'Invalid input'
        }
        
        setEmail(emailObj)
        handleEmailAddress(emailObj)
    }


    return (
        <FormControl className={classes.emailInputStyle}>
            <FormLabel className={classes.formLabelStyle} component='legend'>Email address</FormLabel>
            <TextField 
                className={classes.textFieldInputStyle}
                inputProps={{style: {fontSize: 'small'}}}
                fullWidth={true}
                size='small' 
                label='' 
                id='email' 
                type='text' 
                placeholder='Email address'
                value={email.value}
                onChange={e => handleEmailChange(e.target.value)}
                onBlur={handleEmailBlur}
                helperText={email.errorText}
            />
        </FormControl>
    )
}

export default EmailInput