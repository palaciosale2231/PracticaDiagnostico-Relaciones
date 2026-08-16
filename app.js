//traer la libreria de expres
import express from "express";
import { startDB } from "./src/config/database";
import {userRouter} from "./src/routes/user.routes.js"

//hace una copia en una constante de express
const app = express();
const PORT = 3003;

//configuración de las rutas
app.use(userRouter)

//funciones que permite a la aplicacion leer solicitudes en formato json
app.use(express.json());

//configuracion de rutas

app.listen(PORT, () => {
  console.log(`El servidor está utilizando el puerto ${PORT}`);
});
app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente");
});
