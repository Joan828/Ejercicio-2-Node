let http = require("http");
const log = require('logplease');
const logger = log.create('utils');

http.createServer((req, res) =>{
    res.writeHead(200, { "Content-Type": "text/html" });
  })
  .listen(8080);

logger.debug(`Hola Mundo de Node`);
logger.info(`Noticias de última hora, Node.js me encanta!!`);
logger.warn(`Tirando warnings como campeones`);
logger.error(`Algo no está bien!!`);
  