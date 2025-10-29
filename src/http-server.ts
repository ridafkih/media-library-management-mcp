import { createServer } from "node:http";
import { transport } from "./transport";

const handleReqest = transport.handleRequest.bind(transport);

export const server = createServer(handleReqest)

