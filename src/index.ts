/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import express, { application, Application, Request, Response } from 'express'
import morgan from 'morgan'
import logger from './utilities/logger';
import routes from './routes/index';
import * as dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 3000
// create an instance server
const app: Application = express()
// HTTP request logger middleware
app.use('/api', logger, routes)
//app.use(morgan('short'))

// add routing for / path
// app.get('/', (_req: Request, res: Response) => {
//   res.json({
//     message: 'Hello World 🌍'
//   })
// })

// start express server
app.listen(PORT, () => {
  console.log(`Server is starting at port:${PORT}`)
})

export default app
