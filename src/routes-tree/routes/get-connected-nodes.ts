import  Express  from "express";
import { getConnectedPeers } from '../../_helpers/get-connected-peers'

const peers = getConnectedPeers();
const routerGetConnectedNodes = Express.Router();

routerGetConnectedNodes.get("/", (req, res)=>{
        res.json(peers);
})

export = routerGetConnectedNodes;