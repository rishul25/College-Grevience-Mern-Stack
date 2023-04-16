import  express  from 'express';
import dotenv from 'dotenv'
import connectDb from './config/db.js';
import authRoutes from './Routes/authRoutes.js'
import authGrevinec from './Routes/authGrevienc.js'
import authTeacher from './Routes/authTeacher.js'

import cors from 'cors'

dotenv.config();


//databse
connectDb()


const app = express();

//middleware
app.use(cors())
app.use(express.json())




//routes
app.use('/api/v1',authRoutes)
app.use('/api/v1',authGrevinec)
app.use('/api/v1/teacher',authTeacher)



const PORT = process.env.PORT || 8080

app.listen(PORT,()=>{
    console.log(`Server is Running on ${PORT}`)
})