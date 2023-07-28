import express from 'express';
import {get,getAll,create,update,remove} from '../controllers/food'
import { checkPermission } from '../middlewares/checkPermission';
import {foods, Tags} from "../../db.json"
import asyncHandler from 'express-async-handler';
const router = express.Router()

router.get("/foods",getAll)
router.post("/foods",checkPermission,create)
router.post("/foods",create)
router.get("/foods/:id",get)
router.put("/foods/:id",checkPermission,update)
router.delete("/foods/:id",checkPermission,remove)
router.delete("/foods/:id",remove)

router.get("/foods/tags", (req,res)=>{
    res.send(Tags)
})
export default router