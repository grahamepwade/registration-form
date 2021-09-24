import React, { useState } from 'react'

import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import FormLabel from '@mui/material/FormLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import OutlinedInput from '@mui/material/OutlinedInput'

import makeStyles from '@mui/styles/makeStyles'

import {  statesProvincesList } from 'helpers'

const useStyles = makeStyles((theme) => ({
    territoryInputStyle: {
        width: '100%',
        color: theme.palette.secondary.main,
    },
    formLabelStyle: {
        paddingBottom: '5px',
        color: theme.palette.secondary.main + ' !important',
    },
    textFieldInputStyle: {
        '& p': {
            color: 'red',
            marginLeft: 0
        }
    },
    selectInput: {
        height: '36px',
        fontSize: '13px',
    },
    inputPropsStyle: {
        padding: '0px'
    }
}))


const TerritoryInput = ({ handleTerritory }) => {
    const [territory, setTerritory] = useState({ errorText: '', value: '' })

    const classes = useStyles()

    const handleDropdownChange = (input) => {
        let territoryObj = {...territory}
        territoryObj.value = input

        setTerritory(territoryObj)
        handleTerritory(territoryObj)
    }

    return (
        <FormControl className={classes.territoryInputStyle}>
            <FormLabel className={classes.formLabelStyle} component='legend'>State / Province</FormLabel>
            <Select
                className={classes.selectInput}
                displayEmpty
                value={territory.value}
                onChange={(e) => handleDropdownChange(e.target.value)}
                input={<OutlinedInput />}
            >
                <MenuItem disabled value=''>
                    <em>State</em>
                </MenuItem>
                {statesProvincesList.sort().map((name) => (
                    <MenuItem
                        key={name}
                        value={name}
                    >
                        {name}
                    </MenuItem>
                ))}
            </Select>
            <FormHelperText 
                style={{
                    display: territory.errorText === '' ? 'none' : 'block',
                    color: 'red',
                    marginLeft: 0
                }}
            >
                {territory.errorText}
            </FormHelperText>
        </FormControl>
    )
}

export default TerritoryInput