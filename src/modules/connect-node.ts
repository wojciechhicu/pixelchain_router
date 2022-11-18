import { readFile, writeFile } from "fs";
import { connectPeer as Peer} from "src/interfaces/connect-peer.interface";

/**
 * Connect other node to the network
 * @param peer peer object to connect
 * @returns true positive add, false error while adding
 */
export function connect(peer: Peer): Promise<boolean>{
        return new Promise (resolve=>{
                
                //make sure that types are correct
                String(peer.host);
                String(peer.type);
                Number(peer.port);

                //read file with nodes
                readFile('data/connected-peers.json', 'utf8', (err: any, data: any)=>{

                        //check for eny errors
                        if(err){
                                resolve(false)
                        }else {

                                //parsed data from file
                                let rawData: Peer[] = JSON.parse(data);

                                //check if there is this peer connected
                                if(rawData.findIndex(e => e.host === peer.host && e.port === peer.port) <0){

                                        //push data of peers
                                        rawData.push(peer)

                                        //write again file
                                        writeFile('data/connected-peers.json', JSON.stringify(rawData, null, 2), 'utf8', (e)=>{

                                                //if there was an error while saving resolve false as cannot connect to the network
                                                if(e){
                                                        resolve(false);
                                                } else {
                                                        //full connected
                                                        resolve(true)
                                                }
                                        })
                                } else {
                                        //if it is connected just resolve true as connected
                                        resolve(true)
                                }
                        }
                })
        })
}