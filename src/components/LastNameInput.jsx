import React, { useState } from 'react'

import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import TextField from '@mui/material/TextField'

import makeStyles from '@mui/styles/makeStyles'

import { validName } from 'helpers'

const useStyles = makeStyles((theme) => ({
    formLabelStyle: {
        paddingBottom: '5px',
        color: theme.palette.secondary.main
    },
    nameInputStyle: {
        width: '100%',
    },
    textFieldInputStyle: {
        '& p': {
            color: 'red',
            marginLeft: 0
        }
    }
}))

const LastNameInput = ({ handleLastName }) => {
    const [lastName, setLastName] = useState({ errorText: '', value: '' })

    const classes = useStyles()

    const handleLastNameChange = (input) => {
        let lastNameObj = {...lastName}
        lastNameObj.errorText = input.match(validName) === null && input !== '' ? 'Invalid input' : ''
        lastNameObj.value = input

        setLastName(lastNameObj)
    }

    const handleOnBlur = () => {
        let lastNameObj = {...lastName}
        lastNameObj.errorText = lastNameObj.value === '' ? lastNameObj.errorText = 'Cannot be empty' : lastNameObj.errorText
        
        setLastName(lastNameObj)
        handleLastName(lastNameObj)
    }

    return (
        <FormControl className={classes.nameInputStyle}>
            <FormLabel className={classes.formLabelStyle} component='legend'>Last name</FormLabel>
            <TextField
                className={classes.textFieldInputStyle}
                inputProps={{style: {fontSize: 'small'}}}  
                size='small' 
                label='' 
                id='last-name' 
                type='text' 
                placeholder='Last name'
                value={lastName.value}
                onChange={e => handleLastNameChange(e.target.value)}
                onBlur={handleOnBlur}
                helperText={lastName.errorText}
            />
        </FormControl>
    )
}

export default LastNameInput