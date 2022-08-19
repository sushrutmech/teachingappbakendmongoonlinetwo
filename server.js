const http =  require('http');
const app = require('./app');
const errorHandler = require('./middlewares/errorHandler');
const server = http.createServer(app);

app.use(errorHandler.errorHandler);
server.listen(3000 , console.log('server is started at 3000'))