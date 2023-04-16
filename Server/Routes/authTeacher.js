import express from 'express'
import {AllTeacher, registerTeacher,DeleteInfo,GetSingleINfos , EditInfos} from '../controller/authTeacher.js'


const router = express.Router();


//register teacher

router.post('/registerteacher',registerTeacher)

//All Teacher
router.get('/getTeacher', AllTeacher )


//delete
router.delete("/:id",DeleteInfo)


//get singleinfo
router.get("/:id", GetSingleINfos)

//edit info
router.put("/edit/:id",EditInfos)


export default router;