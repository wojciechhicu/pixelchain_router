/**
 * Basic imports
 */
import  Express  from "express";
import fs from 'fs';
const routerConnectNode = Express.Router();

/**
 * Main logic of route
 * route: /get-connected-nodes
 */
routerConnectNode.get("/", (req, res)=>{
        try {
                /** Read connected-peers.json file and send error or connected nodes  */
                fs.readFile('src/data/connected-peers.json', 'utf8' ,(err, data)=>{
                        if(err){
                                res.status(400).send({error: err})
                        } else {
                                res.status(200).send(data);
                        }
                })
        } catch( error){
                /** If any error accurs in reading file send info to client */
                res.status(400).send( {error: error} )
        }
})

/**
 * Export rote logic
 */
export = routerConnectNode;