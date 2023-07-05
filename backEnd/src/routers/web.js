import express  from 'express';
import UserController from '../controlls/UserController.js';


const webRouter= express.Router();
const userInstance= new UserController();


webRouter.get('/', userInstance.index)

export default webRouter;