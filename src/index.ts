/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import express, { application, Application, Request, Response } from 'express'
// import morgan from 'morgan'
// import logger from './utilities/logger'
// import routes from './routes/index'
import { promises as fs } from 'fs'
import cjs from 'csvtojson'
import path from 'path'
import * as dotenv from 'dotenv'

dotenv.config()
const csvFilePath = path.join(__dirname, 'users.csv')
const PORT = process.env.PORT || 3000
// create an instance server
const app: Application = express()

// HTTP request logger middleware
//app.use('/api', logger, routes)
//app.use(morgan('short'))

// add routing for / path
// app.get('/', (_req: Request, res: Response) => {
//   res.json({
//     message: 'Hello World 🌍'
//   })
// })

// add routing for / path
app.get('/convert', (_req: Request, res: Response) => {
  const convertFile = async () => {
    cjs().fromFile(csvFilePath).then(async (jsonObj) => {
      const jsonArray = jsonObj.map((item) => {
        const temp = {
          first_name: item.first_name,
          last_name: item.last_name,
          phone: item.phone == "" ? "missing data" : item.phone
        }
        return temp
      })
      const writeData = async () => { await fs.writeFile(path.join(__dirname, 'users.json'), JSON.stringify(jsonArray)) }
      writeData()
      try {
        const readFile = await fs.readFile(path.join(__dirname, 'users.json'), 'utf8')
        res.status(200).json(JSON.parse(readFile))
      }
      catch (error) {
        res.status(400).json({ message: error })
      }
    })
  }
  try {
    convertFile()
  }
  catch (error) {
    res.status(400).json({ message: error })
  }
})

// start express server
app.listen(PORT, () => {
  console.log(`Server is starting at port:${PORT}`)
})

export default app
