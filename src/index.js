import express, { json } from 'express';
const app = express();
import cors from 'cors';
import indexRouter from './routes/indexRouter';
import './database/connection';
import dotenv from 'dotenv'
import errorHandlerMiddleware from './middlewares/errorHandler';

//configuration
dotenv.config();
app.use(cors())

app.use(json({limit:1024}))
app.set('port', process.env.PORT || 8080)

//routers
app.use('/api',indexRouter)
app.use(errorHandlerMiddleware)

app.listen(app.get('port'), () => {
    console.log(`Server running in http://localhost:${app.get('port')}`)
})

