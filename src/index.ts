import Express from "express";
import { Server } from "./config";
import helmet from "helmet";
import cors from "cors"
import routes from "./routes-tree/routes-index"

const app = Express()

app.use(cors())
app.use(helmet())
app.use(Express.json())
app.use("/", routes)
app.get("/",(req, res)=>{

})

app.listen(Server.Port, ()=>{
        console.log(`Server created: http://localhost:${Server.Port}`);
})