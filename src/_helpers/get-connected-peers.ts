import { ConnectedPeers as cPeers} from '../interfaces/connected-peers.interface'
import fs from 'fs'

export function getConnectedPeers(): cPeers[]{
        let file = fs.readFileSync('./data/connected-peers.json', { encoding: 'utf8'});
        let parsedPeers: cPeers[] = JSON.parse(file)
        return parsedPeers
}