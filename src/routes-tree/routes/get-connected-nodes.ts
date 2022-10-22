import  Express  from "express";
const routerGetConnectedNodes = Express.Router();
const peers = {
        test: 123
}
routerGetConnectedNodes.get("/", (req, res)=>{
        res.json(peers)
})

export = routerGetConnectedNodes;