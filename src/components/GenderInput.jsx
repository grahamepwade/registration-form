import React, { useState } from 'react'

import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

import makeStyles from '@mui/styles/makeStyles'
import Container from '@mui/material/Container'

const useStyles = makeStyles((theme) => ({
    genderFormStyle: {
        width: '100%',
    },
    formLabelStyle: {
        paddingBottom: '5px',
        color: theme.palette.secondary.main,
    },
    buttonContainerStyle: {
        paddingLeft: '0'
    },
    buttonStyle: {
        fontSize: '13px',
        boxShadow: 'none',
        textTransform: 'none',
        minWidth: '5rem',
        height: '34px',
        padding: '5px 15px',
        marginRight: '20px',
        color: theme.palette.secondary.main + ' !important',
        borderColor: 'rgba(0, 0, 0, 0.23)',
        '&:hover': {
            borderColor: theme.palette.primary.main + ' !important',
        }
    },
}))


const GenderInput = ({ handleGender }) => {
    const [gender, setGender] = useState({ errorText: '', value: '' })

    const classes = useStyles()

    const handleChange = (selection) => {
        let genderObj = {...gender}
        genderObj.value = selection

        handleGender(genderObj)
        setGender(genderObj)
    }

    return (
        <FormControl className={classes.genderFormStyle}>
            <FormLabel className={classes.formLabelStyle} component='legend'>Gender</FormLabel>
            <Container className={classes.buttonContainerStyle}>
                <Button
                    className={classes.buttonStyle}
                    variant= {gender.value === 'male' ? 'contained' : 'outlined'}
                    style={{backgroundColor: gender.value === 'male' ? '#00b79b' : ''}}
                    size='small'
                    value='male'
                    onClick={() => handleChange('male')}
                >
                    Male
                </Button>
                <Button
                    className={classes.buttonStyle}
                    value='female'
                    variant= {gender.value === 'female' ? 'contained' : 'outlined'}
                    style={{backgroundColor: gender.value === 'female' ? '#00b79b' : ''}}
                    size='small'
                    onClick={() => handleChange('female')}
                >
                    Female
                </Button>
                <Button
                    className={classes.buttonStyle}
                    value='other'
                    variant= {gender.value === 'other' ? 'contained' : 'outlined'}
                    style={{backgroundColor: gender.value === 'other' ? '#00b79b' : ''}}

                    size='small'
                    onClick={() => handleChange('other')}
                >
                    Other
                </Button>
            </Container>
        </FormControl>
    )
}

export default GenderInput