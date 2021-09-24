#!/usr/bin/env node

const express = require('express')

const app = express()
const port = 5000

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.listen(port, () => console.log(`Listening on port ${port}`))

var formData = {}

app.post('/submit', (req, res) => {
    formData = req.body
    res.send({ express: formData })
})
