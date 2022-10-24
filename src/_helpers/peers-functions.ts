import { ConnectedPeers as cPeers} from '../interfaces/connected-peers.interface'
import fs from 'fs'

/**
 * Get connected node from json file
 * @returns connected nodes to router
 */
export function getConnectedPeers(): cPeers[]{
        let file = fs.readFileSync('./data/connected-peers.json', { encoding: 'utf8'});
        let parsedPeers: cPeers[] = JSON.parse(file)
        return parsedPeers
}

/**
 * Connect node to network
 * @param host host of the node
 * @param port port of the node
 * @param type type of node validator | router
 * @returns boolean true = connected; false = not connected
 */
export function connectPeer(host: string, port: number, type: string): boolean {
        let connectedPeers: cPeers[] = getConnectedPeers();
        let checkNumber: number = 0;
        connectedPeers.forEach((val, ind)=>{
                if(val.host == host && val.port == port){
                        checkNumber = checkNumber + 1
                }
        })
        if(checkNumber == 0){
                connectedPeers.push({host: host, port: port, type: type});
                try {
                        let file = fs.writeFileSync('./data/connected-peers.json', JSON.stringify(connectedPeers));
                        return true
                } catch (e) {
                        return e
                }
        } else {
                return true
        }
}