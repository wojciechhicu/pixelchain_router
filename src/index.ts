/**
 * Express imports
 */
import Express from "express";
import helmet from "helmet";
import bodyParser from 'body-parser';
import cors from "cors";
import routes from "./routes-tree/routes-index";
const app = Express();

/**
 * Server config file import
 */
import { Server } from "./config";

/**
 * Using imports
 */
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/", routes);
app.get("/",(req, res)=>{

})

/**
 * Start app and send information to console that server is ready to start
 */
app.listen(Server.Port, ()=>{
        console.log(`Server created: http://localhost:${Server.Port}`);
})