const express = require("express");
const app = express();
const cors = require("cors");

//puerto
app.set("port", 4000);

//cors
app.use(cors());
//json
app.use(express.json());

//cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "PUT, OPTIONS POST, GET, DELETE, PATCH"
  );
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

//rutas
app.use(require("./routes/registro"));
app.use(require("./routes/signin"));

app.use(require("./routes/establecimiento"));

app.use(require("./routes/categorias"));

//inicia servidor
app.listen(app.get("port"), () => {
  console.log("Servidor corriendo", app.get("port"));
});
