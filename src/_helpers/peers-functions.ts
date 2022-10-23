import { ConnectedPeers as cPeers} from '../interfaces/connected-peers.interface'
import fs from 'fs'

export function getConnectedPeers(): cPeers[]{
        let file = fs.readFileSync('./data/connected-peers.json', { encoding: 'utf8'});
        let parsedPeers: cPeers[] = JSON.parse(file)
        return parsedPeers
}

export function connectPeer(host: string, port: number, type: string): string {
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
                        let file = fs.writeFileSync('./data/connected-peers.json', JSON.stringify(connectedPeers))
                } catch (e) {
                        return e
                }
                return 'error'
        } else {
                return 'error'
        }
}