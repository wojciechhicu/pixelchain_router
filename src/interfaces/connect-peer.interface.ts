/**
 * connected peers in json file
 * @param host host server with http:// string 
 * @param port port of the host
 * @param type router -> router just navigate nodes; validator is a full node which validate and send transactions
 * 
 * @example 
 *      host: 'http://localhost',
 *      port: 12000,
 *      type: 'validator'
 */
export interface connectPeer {
        host: string;
        port: number;
        type: 'router' | 'validator';
}