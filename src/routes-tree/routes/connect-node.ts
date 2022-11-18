/**
 * Basic imports
 */
import  Express  from "express";
import { connect } from '../../modules/connect-node'
const routeConnectNode = Express.Router();

/**
 * Logic for connect node
 * route: /connect-node
 */
routeConnectNode.post("/", (req, res)=>{
        try {
                connect(req.body).then((v)=>{
                        v ? res.status(200).send("ok") : res.status(400).send('error')
                })
        } catch (e){
                res.status(400).send(e)
        }
})

/**
 * Export logic
 */
export = routeConnectNode;