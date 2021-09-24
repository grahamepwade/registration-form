import React, { useState } from 'react'

import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import makeStyles from '@mui/styles/makeStyles'

import { getDate, getMonth, getYear } from 'date-fns'

import {
    Header,
    FirstNameInput,
    LastNameInput,
    EmailInput,
    StreetInput,
    CityInput,
    TerritoryInput,
    ZIPInput,
    PhoneInput,
    DOBInput, 
    GenderInput,
    SubmitButton,
} from 'components'

import SuccessPage from './SuccessPage'

import { sendFormData } from 'helpers'

const useStyles = makeStyles((theme) => ({
    formStyle: {
        width: '350px',
        color: theme.palette.secondary.main,
        textAlign: 'left',
        paddingTop: '20px',
        fontFamily: 'inherit', 
    },
    formTitleStyle: {
        fontFamily: '-webkit-font', 
        fontWeight: 600,
        paddingTop: '20px'
    },
    gridItemStyle: {
        paddingTop: '10px !important'
    },
    dialogButtonStyle: {
        color: theme.palette.primary.main
    }
}))

const Form = () => {
    var today = new Date()
    var cutOffDate = new Date(getYear(today) - 18, getMonth(today), getDate(today))

    const [firstNameInput, setFirstNameInput] = useState({ errorText: '', value: '' })
    const [lastNameInput, setLastNameInput] = useState({ errorText: '', value: '' })
    const [emailAddressInput, setEmailAddressInput] = useState({ errorText: '', value: '' })
    const [streetAddressInput, setStreetAddressInput] = useState({ errorText: '', value: '' })
    const [cityInput, setCityInput] = useState({ errorText: '', value: '' })
    const [territoryInput, setTerritoryInput] = useState({ errorText: '', value: '' })
    const [zipInput, setZIPInput] = useState({ errorText: '', value: '' })
    const [phoneInput, setPhoneInput] = useState({ errorText: '', value: '' })
    const [dateInput, setDateInput] = useState({ errorText: '', value: cutOffDate })
    const [genderInput, setGenderInput] = useState({ errorText: '', value: '' })

    const [dialogOpen, setDialogOpen] = useState(false)
    const [dataSubmitted, setDataSubmitted] = useState(false)

    const classes = useStyles()

    const handleFirstName = (input) => {
        setFirstNameInput(input)
    }

    const handleLastName = (input) => {
        setLastNameInput(input)
    }

    const handleEmailAddress = (input) => {
        setEmailAddressInput(input)
    }

    const handleStreetAddress = (input) => {
        setStreetAddressInput(input)
    }

    const handleCity = (input) => {
        setCityInput(input)
    }

    const handleTerritory = (input) => {
        setTerritoryInput(input)
    }

    const handleZIP = (input) => {
        setZIPInput(input)
    }

    const handlePhone= (input) => {
        setPhoneInput(input)
    }

    const handleDOB = (input) => {
        setDateInput(input)
    }

    const handleGender = (input) => {
        setGenderInput(input)
    }

    const handleCloseDialog = () => {
        setDialogOpen(false)
    }


    const handleSubmitClick = () => {

        const validated = firstNameInput.errorText === ''
                        && lastNameInput.errorText === ''
                        && emailAddressInput.errorText === ''
                        && streetAddressInput.errorText === ''
                        && cityInput.errorText === ''
                        && territoryInput.errorText === ''
                        && zipInput.errorText === ''
                        && phoneInput.errorText === ''
                        && dateInput.errorText === ''
                        && genderInput.errorText === ''
    
        const valuesExist = firstNameInput.value !== ''
                        && lastNameInput.value !== ''
                        && emailAddressInput.value !== ''
                        && streetAddressInput.value !== ''
                        && cityInput.value !== ''
                        && territoryInput.value !== ''
                        && zipInput.value !== ''
                        && phoneInput.value !== ''
                        && dateInput.value !== ''
                        && genderInput.value !== ''


        if (validated && valuesExist) {
            const postRes = sendFormData({
                'firstName': firstNameInput.value,
                'lastName': lastNameInput.value,
                'emailAddress': emailAddressInput.value,
                'streetAddress': streetAddressInput.value,
                'city': cityInput.value,
                'territory': territoryInput.value,
                'zip': zipInput.value,
                'phone': phoneInput.value,
                'dob': dateInput.value,
                'gender': genderInput.value
            })

            if (postRes) {
                setDataSubmitted(true)
            }
            else {
                setDialogOpen(true)
            }
        }
        else {
            setDialogOpen(true)
        }
    }

    return (
        <Container align='center' className={classes.formContiner} >
            {dataSubmitted
            ? <SuccessPage />
            : <>
                <Header />
                <Typography className={classes.formTitleStyle} variant='h4' component='h4'>
                    Welcome
                </Typography>

                <Grid className={classes.formStyle} container spacing={2}>
                    <Grid className={classes.gridItemStyle} item xs={6}>
                        <FirstNameInput handleFirstName={handleFirstName} />
                    </Grid>

                    <Grid className={classes.gridItemStyle} item xs={6}>
                        <LastNameInput handleLastName={handleLastName} />
                    </Grid>

                    <Grid className={classes.gridItemStyle} item xs={12}>
                        <EmailInput handleEmailAddress={handleEmailAddress} />
                    </Grid>

                    <Grid className={classes.gridItemStyle} item xs={12}>
                        <StreetInput handleStreetAddress={handleStreetAddress} />
                    </Grid>

                    <Grid className={classes.gridItemStyle} item xs={6}>
                        <CityInput handleCity={handleCity} />
                    </Grid>
                    <Grid className={classes.gridItemStyle} item xs={6}>
                        <TerritoryInput handleTerritory={handleTerritory} />
                    </Grid>

                    <Grid className={classes.gridItemStyle} item xs={12}>
                        <ZIPInput handleZIP={handleZIP} />
                    </Grid>

                    <Grid className={classes.gridItemStyle} item xs={12}>
                        <PhoneInput handlePhone={handlePhone} />
                    </Grid>

                    <Grid className={classes.gridItemStyle} item xs={12}>
                        <DOBInput handleDOB={handleDOB} />
                    </Grid>

                    <Grid className={classes.gridItemStyle} item xs={12}>
                        <GenderInput handleGender={handleGender} />
                    </Grid>
                    
                    <Grid className={classes.gridItemStyle} item xs={12}>
                        <SubmitButton handleSubmitClick={handleSubmitClick} />
                    </Grid>

                    <Dialog
                        open={dialogOpen}
                        keepMounted
                        onClose={handleCloseDialog}
                        aria-describedby='alert-dialog-slide-description'
                    >
                        <DialogTitle>{'There was a problem with some of your answers!'}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id='alert-dialog-slide-description'>
                                Please double check the form to ensure all sections 
                                have been filled out, or contact us for assistance.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button className={classes.dialogButtonStyle} onClick={handleCloseDialog}>Understood</Button>
                        </DialogActions>
                    </Dialog>
                </Grid>
            </>
        }
        </Container>
    )
}

export default Form