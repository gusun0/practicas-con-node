// La referencia de la conexión a la BD
// mysql
// util: es un módulo que se utiliza para que las devoluciones de datos de mysql sean asíncronas

const mysql = require('mysql');
const util = require('util');

// instancia del objeto mysql
const pool = mysql.createPool({
  connectionLimit: 10, /* se permiten 10 conexiones*/
  host: 'localhost',
  user: 'root',
  password: '',	
  database: 'ManyManyDemo'
});

// pool :  referencia de la conexión a localhost con user root

// de esta manera pool.query pueda ser trabajado como una promesa
pool.query = util.promisify(pool.query);
console.log('Conexión a la BD');

module.exports = pool;


