const express = require("express");
const router = express.Router();
const sqlconnection = require("../conexion/connection");

router.post("/registrarse", (req, res) => {
  const { usuario, email, pass } = req.body;
  sqlconnection.query(
    `insert into Administrador (Usuario,Email,Contraseña) 
    values ('${usuario}','${email}','${pass}')`,
    (error, row, fields) => {
      if (error) {
        console.log(error);
        res.json({ error });
      } else {
        console.log(row);
        console.log(fields);
        res.json({ response: row, fields });
      }
    }
  );
});

module.exports = router;
