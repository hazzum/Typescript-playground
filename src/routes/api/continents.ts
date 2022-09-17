import express from 'express';
const continents = express.Router()

continents.get('/', (req, res) => {
    console.log('/api/continents was visited');
    res.send("visiting the /continents api route");
})

export default continents;