const database = 'BD3-NoSQL-AtlasMongoDB'

const collection = 'bd3-nosql-atv1'

use(database);

db[collection].find(
  {cpf: "12345678901"},
  {"_id": 0}
)