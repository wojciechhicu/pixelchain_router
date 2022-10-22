import  Express  from "express";
import { connectPeer } from '../../_helpers/peers-functions'
import { ConnectedPeers as cPeers } from "src/interfaces/connected-peers.interface";

const routerGetConnectedNodes = Express.Router();

routerGetConnectedNodes.get("/", (req, res)=>{
        let peers: string = connectPeer('http://localhost:', 3005, 'validator')
        res.json(peers)
})

export = routerGetConnectedNodes;