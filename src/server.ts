import * as Express from 'express';

export default class Server {
    public app: Express.Application;

    private static defaultPort: number = 3000;

    /**
     * Creates a new instance of the server with an optional port parameter
     */
    public static create(port: number = Server.defaultPort): Server {
        return new Server(port);
    }

    /**
     * Construct instance of server with the desired port
     * readonly indicates that we want the parameter to be turned
     * into a readonly property
     */
    constructor(readonly port: number) {
        this.app = Express();

        this.configureServer();
        this.setUpRoutes();
    }

    /**
     * Configures server options
     */
    private configureServer(): void {
    }

    /**
     * Sets up routes
     */
    private setUpRoutes(): void {
        this.app.get('/', (request, response) => {
            response.send("Hello world!");
        });
    }

    /**
     * Starts the server
     */
    public start(): void {
        this.app.listen(this.port, () => {
            console.log(`App listening on ${this.port}`);
        });
    }
}