//traer la libreria de expres
import express from "express";

//hace una copia en una constante de express
const app = express();
const PORT = 3003;

//funciones que permite a la aplicacion leer solicitudes en formato json
app.use(express.json());

//configuracion de rutas

app.listen(PORT, () => {
  console.log(`El servidor está utilizando el puerto ${PORT}`);
});
app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente");
});
