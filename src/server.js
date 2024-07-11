import express from 'express';
import { config } from 'dotenv'
import canal from './routes/index.js';
config();


const server = express();

server.set('port', process.env.PORT || 4550);
server.use("/", canal)

export default server;