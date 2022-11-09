/**
 * Connected peers critical data
 * @param host http://localhost
 * @param port 12000
 * @param type router | validator
 * @param pixels If type = validator then send confirmation that valdiator have 32 / 32000000 pixels in wallet
 * @param wallet wallet of validator
 */
export interface ConnectedPeers {
        host: string;
        port: number;
        type: string;
        pixels?: number;
        wallet?: string;
}