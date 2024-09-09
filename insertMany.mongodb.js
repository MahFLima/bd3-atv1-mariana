const database = 'BD3-NoSQL-AtlasMongoDB'

const collection = 'bd3-nosql-atv1'

use(database)

db[collection].insertMany(
  [
    {
      cod_aluno: "1",
      nome: "João Silva",
      cpf: "12345678901",
      rg: "123456789",
      telefone_aluno: "11937652745",
      telefone_responsavel: "11937658899",
      email: "joao.silva@email.com",
      data_nascimento: "10/04/2008"
    },
    {
      cod_aluno: "2",
      nome: "Maria Oliveira",
      cpf: "23456789012",
      rg: "234567890",
      telefone_aluno: "11937652746",
      telefone_responsavel: "11937658900",
      email: "maria.oliveira@email.com",
      data_nascimento: "12/05/2007"
    },
    {
      cod_aluno: "3",
      nome: "Pedro Santos",
      cpf: "34567890123",
      rg: "345678901",
      telefone_aluno: "11937652747",
      telefone_responsavel: "11937658901",
      email: "pedro.santos@email.com",
      data_nascimento: "15/06/2009"
    },
    {
      cod_aluno: "4",
      nome: "Ana Costa",
      cpf: "45678901234",
      rg: "456789012",
      telefone_aluno: "11937652748",
      telefone_responsavel: "11937658902",
      email: "ana.costa@email.com",
      data_nascimento: "20/07/2006"
    },
    {
      cod_aluno: "5",
      nome: "Lucas Pereira",
      cpf: "56789012345",
      rg: "567890123",
      telefone_aluno: "11937652749",
      telefone_responsavel: "11937658903",
      email: "lucas.pereira@email.com",
      data_nascimento: "25/08/2008"
    },
    {
      cod_aluno: "6",
      nome: "Juliana Almeida",
      cpf: "67890123456",
      rg: "678901234",
      telefone_aluno: "11937652750",
      telefone_responsavel: "11937658904",
      email: "juliana.almeida@email.com",
      data_nascimento: "30/09/2007"
    },
    {
      cod_aluno: "7",
      nome: "Roberto Lima",
      cpf: "78901234567",
      rg: "789012345",
      telefone_aluno: "11937652751",
      telefone_responsavel: "11937658905",
      email: "roberto.lima@email.com",
      data_nascimento: "05/10/2008"
    },
    {
      cod_aluno: "8",
      nome: "Fernanda Souza",
      cpf: "89012345678",
      rg: "890123456",
      telefone_aluno: "11937652752",
      telefone_responsavel: "11937658906",
      email: "fernanda.souza@email.com",
      data_nascimento: "10/11/2006"
    },
    {
      cod_aluno: "9",
      nome: "Carlos Fernandes",
      cpf: "90123456789",
      rg: "901234567",
      telefone_aluno: "11937652753",
      telefone_responsavel: "11937658907",
      email: "carlos.fernandes@email.com",
      data_nascimento: "15/12/2007"
    },
    {
      cod_aluno: "10",
      nome: "Beatriz Martins",
      cpf: "01234567890",
      rg: "012345678",
      telefone_aluno: "11937652754",
      telefone_responsavel: "11937658908",
      email: "beatriz.martins@email.com",
      data_nascimento: "22/01/2009"
    }
  ]
)