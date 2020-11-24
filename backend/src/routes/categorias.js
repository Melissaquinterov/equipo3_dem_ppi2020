const express = require("express");
const router = express.Router();
const sqlconnection = require("../conexion/connection");

router.get("/belleza", (req, res) => {
  sqlconnection.query(
    `SELECT * FROM Establecimientos WHERE ID_categoria = 1`,
    (err, rows, fields) => {
      if (err) {
        res.json({ err });
        return;
      }
      res.json({ rows, fields });
    }
  );
});

router.get("/drogueria", (req, res) => {
  sqlconnection.query(
    `SELECT * FROM Establecimientos WHERE ID_categoria = 2`,
    (err, rows, fields) => {
      if (err) {
        res.json({ err });
        return;
      }
      res.json({ rows, fields });
    }
  );
});

router.get("/restaurantes", (req, res) => {
  sqlconnection.query(
    `SELECT * FROM Establecimientos WHERE ID_categoria = 3`,
    (err, rows, fields) => {
      if (err) {
        res.json({ err });
        return;
      }
      res.json({ rows, fields });
    }
  );
});

router.get("/tecnologia", (req, res) => {
  sqlconnection.query(
    `SELECT * FROM Establecimientos WHERE ID_categoria = 4`,
    (err, rows, fields) => {
      if (err) {
        res.json({ err });
        return;
      }
      res.json({ rows, fields });
    }
  );
});

module.exports = router;
