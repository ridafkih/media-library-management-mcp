import { createServer } from "node:http";
import { transport } from "./transport";

export const server = createServer(transport.handleRequest)
server.listen(3000);
