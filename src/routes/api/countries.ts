import express from 'express';
const countries = express.Router()

countries.get('/', (req, res) => {
    console.log('/api/countries was visited');
    res.send("visiting the /countries api route");
})

export default countries;