/**
 * Export server config file
 */
export const Server: ServerConfig = {
        Port: 3000,
}

/**
 * Specify port for server
 * 
 * @param port port which server starts listening
 */
interface ServerConfig {
        Port: number;
}