import  Express  from "express";
import { getConnectedPeers } from '../../_helpers/peers-functions'

const peers = getConnectedPeers();
const routerConnectNode = Express.Router();

routerConnectNode.get("/", (req, res)=>{
        res.json(peers);
})

export = routerConnectNode;