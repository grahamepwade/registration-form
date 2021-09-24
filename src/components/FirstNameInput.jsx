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
            marginLeft: 0,
        }
    }
}))


const FirstNameInput = ({ handleFirstName }) => {
    const [firstName, setFirstName] = useState({ errorText: '', value: '' })

    const classes = useStyles()

    const handleFirstNameChange = (input) => {
        let firstNameObj = {...firstName}
        firstNameObj.errorText = input.match(validName) === null && input !== '' ? 'Invalid input' : ''
        firstNameObj.value = input

        setFirstName(firstNameObj)
    }

    const handleOnBlur = () => {
        let firstNameObj = {...firstName}
        firstNameObj.errorText = firstNameObj.value === '' ? firstNameObj.errorText = 'Cannot be empty' : firstNameObj.errorText
        
        setFirstName(firstNameObj)
        handleFirstName(firstNameObj)
    }

    return (
        <FormControl className={classes.nameInputStyle}>
            <FormLabel className={classes.formLabelStyle} component='legend'>First name</FormLabel>
            <TextField 
                className={classes.textFieldInputStyle}
                inputProps={{style: {fontSize: 'small'}}}
                size='small' 
                label='' 
                id='first-name' 
                type='text' 
                placeholder='First name'
                value={firstName.value}
                onChange={e => handleFirstNameChange(e.target.value)}
                onBlur={handleOnBlur}
                helperText={firstName.errorText}
            />
        </FormControl>
    )
}

export default FirstNameInput