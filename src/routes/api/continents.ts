import express from 'express';
const continents = express.Router()

continents.get('/', (req, res) => {
    res.send("visiting the /continents api route");
})

export default continents;