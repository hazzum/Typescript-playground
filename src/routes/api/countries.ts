import express from 'express';
const countries = express.Router()

countries.get('/', (req, res) => {
    res.send("visiting the /countries api route");
})

export default countries;