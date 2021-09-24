import React, { useState } from 'react'

import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import TextField from '@mui/material/TextField'

import makeStyles from '@mui/styles/makeStyles'

import { validZIP } from 'helpers'

const useStyles = makeStyles((theme) => ({
    zipInputStyle: {
        width: '100%',
        color: theme.palette.secondary.main,
    },
    formLabelStyle: {
        paddingBottom: '5px',
        color: theme.palette.secondary.main,
        fontFamily: 'inherit'
    },
    textFieldInputStyle: {
        '& p': {
            color: 'red',
            marginLeft: 0
        }
    }
}))


const ZIPInput = ({ handleZIP }) => {
    const [zip, setZIP] = useState({ errorText: '', value: '' })

    const classes = useStyles()

    const handleStreetChange = (input) => {
        let zipObj = {...zip}
        zipObj.value = input
        zipObj.errorText = input.match(validZIP) === null && input !== '' ? 'Invalid input' : ''        

        setZIP(zipObj)
    }

    const handleOnBlur = () => {
        let zipObj = {...zip}
        zipObj.errorText = zipObj.value === '' ? zipObj.errorText = 'Cannot be empty' : zipObj.errorText        
        
        setZIP(zipObj)
        handleZIP(zipObj)
    }

    return (
        <FormControl className={classes.zipInputStyle}>
            <FormLabel className={classes.formLabelStyle} component='legend'>ZIP / Postal</FormLabel>
            <TextField 
                className={classes.textFieldInputStyle}
                inputProps={{style: {fontSize: 'small'}}}
                fullWidth={true}
                size='small' 
                label='' 
                id='zip-postal' 
                type='text' 
                placeholder='ZIP / Postal'
                value={zip.value}
                onChange={e => handleStreetChange(e.target.value)}
                onBlur={handleOnBlur}
                helperText={zip.errorText}
            />
        </FormControl>
    )
}

export default ZIPInput