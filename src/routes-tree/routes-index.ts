import  Express  from "express";
const router = Express.Router();

//routes import
import routerGetConnectedNodes from './routes/get-connected-nodes'

//using imports as routes
router.use("/get-connected-nodes", routerGetConnectedNodes)





//export all routes
export = router