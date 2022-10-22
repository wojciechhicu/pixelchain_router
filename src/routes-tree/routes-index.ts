import  Express  from "express";
const router = Express.Router();

//routes import
import routerGetConnectedNodes from './routes/get-connected-nodes';
import routerConnectNode from './routes/connect-node';
import routerDisconnectNode from './routes/disconnect-node'

//using imports as routes
router.use("/get-connected-nodes", routerGetConnectedNodes);
router.use("/connect-node", routerConnectNode);





//export all routes
export = router;