import express from 'express'
import {registerController, loginController, SingleDataBYname, SingleData, SingleTeacher   }  from '../controller/authController.js'


const router = express.Router();


//register

router.post('/register',registerController)

//LOGIN

router.post('/login', loginController)




router.get('/getsingle', SingleData )




router.get('/getsingleInfo', SingleDataBYname )




router.get('/getSingleTeacher', SingleTeacher )





export default router;