import express from 'express'
import { registerGrevince, EditInfo,DeleteInfo, AllData ,GetSingleINfo } from '../controller/authGrevinec.js';




const router = express.Router();


//register complian

router.post('/complain',registerGrevince)


router.get('/getAll', AllData )

router.get("/:id", GetSingleINfo)

router.delete("/:id",DeleteInfo)


router.put("/edits/:id",EditInfo)




export default router;