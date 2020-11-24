const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "b3xxgsj3cq2xrdrubtgx-mysql.services.clever-cloud.com",
  database: "b3xxgsj3cq2xrdrubtgx",
  user: "uhg2gqxgjkrgofgr",
  password: "o2UGjMrolkVJbeTIODWe"
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Base de datos conectada exitosamente ...");
  }
});

module.exports = connection;
