const express = require("express");
const router = express.Router();
const sqlconnection = require("../conexion/connection");

router.get("/establecimientos", (req, res) => {
  sqlconnection.query(`SELECT * FROM Establecimientos`, (err, rows, fields) => {
    if (err) {
      res.json({ err });
      return;
    }
    res.json({ rows, fields });
  });
});

router.get("/buscar-establecimientos/:busqueda", (req, res) => {
  const { busqueda } = req.params;
  sqlconnection.query(
    `SELECT * FROM Establecimientos WHERE Nomnbreestablecimiento LIKE '%${busqueda}%'`,
    (err, rows, fields) => {
      if (err) {
        res.json({ err });
        return;
      }
      res.json({ rows, fields });
    }
  );
});

router.get("/mis-establecimientos/:idAdmin", (req, res) => {
  const { idAdmin } = req.params;
  sqlconnection.query(
    `SELECT * FROM Establecimientos WHERE ID_administrador = ${idAdmin}`,
    (err, rows, fields) => {
      if (err) {
        res.json({ err });
        return;
      }
      res.json({ rows, fields });
    }
  );
});

router.post("/crear-establecimiento", (req, res) => {
  const {
    nombre,
    direccion,
    categoria,
    cantidadPersonas,
    horario,
    domicilios,
    idAdministrador,
    imagenes
  } = req.body;
  sqlconnection.query(
    `INSERT INTO Establecimientos
        (Nomnbreestablecimiento,Dirrecion,Ndepersonas,Horario,Domicilios,ID_Categoria,ID_Administrador,imagenes)
        VALUES ('${nombre}','${direccion}','${cantidadPersonas}','${horario}','${domicilios}',${categoria},'${idAdministrador}','${imagenes}')
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

router.delete("/borrar-establecimiento/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);

  sqlconnection.query(
    `DELETE FROM Establecimientos WHERE ID_Establecimiento = ${id}`,
    (err, rows, fields) => {
      if (err) {
        res.json({ err, id });
        return;
      }
      res.json({ rows, fields, id });
    }
  );
});

module.exports = router;
