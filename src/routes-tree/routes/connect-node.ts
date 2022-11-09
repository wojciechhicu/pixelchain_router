/**
 * Basic imports
 */
import  Express  from "express";
import fs from 'fs'
import { connectPeer as Peer} from "src/interfaces/connect-peer.interface";
const routeConnectNode = Express.Router();

/**
 * Logic for connect node
 * route: /connect-node
 */
routeConnectNode.post("/", (req, res)=>{
        try {
                /**
                 * Read file with connected peers
                 */
                fs.readFile('data/connected-peers.json', 'utf8', (err, data)=>{
                        if(err){
                                /**
                                 * If there is any error while reading file send error
                                 */
                                res.status(400).send({err: err})
                        } else {
                                //parsed file data
                                let parsedData: Peer[] = JSON.parse(data);

                                //peer to connect from request
                                let peer: Peer = req.body;

                                //making sure that port is a number
                                peer.port = Number(peer.port);

                                //tmp var to check if there is any data like in request
                                let checkNumber: number = 0;
                                parsedData.forEach((val, ind)=>{
                                        if(val.host == peer.host && val.port == peer.port){
                                                checkNumber = checkNumber + 1
                                        }
                                })

                                //if tmp var is 0 as initiated then write it to memory
                                if(checkNumber === 0){
                                        parsedData.push(peer);
                                        fs.writeFile('data/connected-peers.json', JSON.stringify(parsedData, null , 2), 'utf8', (error)=>{
                                                if(error){
                                                        res.status(400).send({error: error});
                                                } else {
                                                        res.status(200).send('ok')
                                                }
                                        })
                                } else {
                                        res.status(400).send("bad")
                                }
                        }
                })
        } catch (e){
                res.status(400).send(e)
        }
})

/**
 * Export logic
 */
export = routeConnectNode;