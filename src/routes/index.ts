import express from 'express';
import countries from './api/countries';
import continents from './api/continents'
const routes = express.Router()
routes.use('/continents', continents);
routes.use('/countries', countries);
routes.get('/', (req, res) => {
    res.send("visiting the main api route");
})

export default routes;