import React from 'react'

import Box from '@mui/system/Box'
import CssBaseline from '@mui/material/CssBaseline'

import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/styles'

import { RegistrationPage } from 'views'

let theme = createTheme({
    palette: {
        primary: {
            main: '#00b79b',
        },
        secondary: {
            main: '#222b3b',
        }
    },
})

const App = () => {

  return (
    <CssBaseline >
        <Box sx={{maxWidth: '100% !important', padding: '0 !important', height: '-webkit-fill-available'}}>
            <ThemeProvider theme={theme}>
                <RegistrationPage />
            </ThemeProvider>
        </Box>
    </CssBaseline>
);
}

export default App