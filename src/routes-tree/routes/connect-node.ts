import  Express  from "express";
import { connectPeer } from '../../_helpers/peers-functions'
import { connectPeer as Peer} from "src/interfaces/connect-peer.interface";

const routeConnectNode = Express.Router();

routeConnectNode.post("/", (req, res)=>{
        const peer = req.body;
        let peers: boolean = connectPeer(peer.host, peer.port, peer.type)
        res.json(peers)
})

export = routeConnectNode;