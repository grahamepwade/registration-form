import React from 'react'

import Container from '@mui/material/Container'

import backgroundImage from 'fe_test/background.jpg'

const styles = {
    bkgdImg: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '50vw',
        height: '100vh'

    }
}

const BackgroundImage = () => {
    return (
        <Container style={styles.bkgdImg} />
    )
}

export default BackgroundImage