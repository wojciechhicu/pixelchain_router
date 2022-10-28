import  Express  from "express";
import fs from 'fs'
import { connectPeer as Peer} from "src/interfaces/connect-peer.interface";

const routeConnectNode = Express.Router();

routeConnectNode.post("/", (req, res)=>{
        try {
                fs.readFile('data/connected-peers.json', 'utf8', (err, data)=>{
                        if(err){
                                res.send(err)
                        } else {
                                let parsedData: Peer[] = JSON.parse(data);
                                let peer: Peer = req.body;
                                peer.port = Number(peer.port);
                                let checkNumber: number = 0;
                                parsedData.forEach((val, ind)=>{
                                        if(val.host == peer.host && val.port == peer.port){
                                                checkNumber = checkNumber + 1
                                        }
                                })
                                if(checkNumber === 0){
                                        parsedData.push(peer);
                                        fs.writeFile('data/connected-peers.json', JSON.stringify(parsedData, null , 2), 'utf8', (error)=>{
                                                if(error){
                                                        res.send(error);
                                                } else {
                                                        res.status(200).send('ok')
                                                }
                                        })
                                } else {
                                        res.status(401).send("bad")
                                }
                        }
                })
        } catch (e){
                res.send(e)
        }
})

export = routeConnectNode;