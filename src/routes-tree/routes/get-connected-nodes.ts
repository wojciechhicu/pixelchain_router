import  Express  from "express";
import fs from 'fs';
import { ConnectedPeers as cPeers} from '../../interfaces/connected-peers.interface'

const routerConnectNode = Express.Router();

routerConnectNode.get("/", (req, res)=>{
        try {
                fs.readFile('data/connected-peers.json', 'utf8' ,(err, data)=>{
                        if(err){
                                res.send(err)
                        } else {
                                res.send(data)
                        }
                })
        } catch( error){
                res.send( error )
        }
})

export = routerConnectNode;