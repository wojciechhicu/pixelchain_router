/**
 * Express imports
 */
import  Express  from "express";
const router = Express.Router();

/**
 * Router imports
 */
import routerGetConnectedNodes from './routes/get-connected-nodes';
import routerConnectNode from './routes/connect-node';
import routerDisconnectNode from './routes/disconnect-node';

/**
 * Using routes
 */
router.use("/get-connected-nodes", routerGetConnectedNodes);
router.use("/connect-node", routerConnectNode);

/**
 * Export routing to ../index.ts
 */
export = router;