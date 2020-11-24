const express = require("express");
const router = express.Router();
const sqlconnection = require("../conexion/connection");

router.put("/inicioSesion", (req, res) => {
  const { usuario, password } = req.body;

  sqlconnection.query(
    `SELECT * FROM Administrador 
    WHERE Usuario = '${usuario}'
    AND Contraseña = '${password}'
    `,
    (error, row, fields) => {
      if (error) {
        console.log(error);
        res.json({ error });
      } else {
        res.json({ row, fields });
      }
    }
  );
});

module.exports = router;
