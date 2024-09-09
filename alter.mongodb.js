const database = 'BD3-NoSQL-AtlasMongoDB'

const collection = 'bd3-nosql-atv1'

use(database);

db[collection].updateOne(
  {cod_aluno: "1"},
  {$set: {
    nome:'João Silva Silva', 
    cpf: "67389026745", 
    rg:"2219873567"
  }}
)