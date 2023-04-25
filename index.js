const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;
//los middlewares son programas que se ejecutan entre el cliente y el servidor, y se utilizan para realizar diversas tareas, como autenticación, gestión de sesiones, registro de solicitudes y respuestas,
server.use(middlewares);
server.use(router);




server.listen(port);