import React from 'react'

import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/system/Box'

import makeStyles from '@mui/styles/makeStyles'

import logo from 'fe_test/logo.svg'

const useStyles = makeStyles((theme) => ({
    header: {
        backgroundColor: '#fff !important',
        boxShadow: 'none !important',
    },
    logoStyle: {
        width: '-webkit-fill-available',
        height: '50px',
        backgroundImage: `url(${logo})`,
        backgroundRepeat: 'no-repeat',
        color: theme.palette.primary.main
    },
    headerButtonStyle: {
        textTransform: 'none',
        minWidth: 'fit-content',
        color: theme.palette.primary.main +  ' !important',
        borderColor: theme.palette.primary.main  +  ' !important',
        '&:hover': {
            borderColor: theme.palette.primary.main,
        }
    }
}))

const Header = () => {

    const classes = useStyles()

    return (
        <AppBar className={classes.header} position='static'>
            <Toolbar variant='regular'>
                <Box className={classes.logoStyle} />
                <Button className={classes.headerButtonStyle} variant='outlined' size='small'>
                    How it works
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header