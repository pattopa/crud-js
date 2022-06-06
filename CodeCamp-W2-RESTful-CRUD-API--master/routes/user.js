import express, {Router} from "express";
import { getUser,getOneUser,deleteUser, createUser,updateUser} from "../controllers/user.js";
const router = express.Router()

router.get('/users',getUser)

router.post('/users',createUser)


router.get('/users/:id', getOneUser)

router.delete('/users/:id', deleteUser)

router.put('/users/:id', updateUser)

export default router

