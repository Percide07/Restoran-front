// services/jsonServer.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Fichier de données JSON pour json-server
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const port = 8000;
server.listen(port, () => {
  console.log(`JSON Server is running on http://localhost:${port}`);
});
