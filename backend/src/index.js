const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar uma informação no backend
  * POST: Criar uma informação no backend
  * PUT: Alterar uma informação no backend
  * DELETE: Deletar uma informação no backend
  */

  /**
   * Tipos de parâmetros:
   * 
   * Query Params: Parâmetros nomeados enviados na rota após '?' (Filtros, paginação)
   * Route Params: Parâmtros utilizados para identificar recursos
   * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
   */

   /**
    * SQL: MySQL, SQLite, PostreSQL, Oracle
    * NoSQL: MongoDB, CouchDB, etc
    * */

    /**
     * Driver: SELECT * FROM users
     * Query Builder: table('users').select(*).where()
     */