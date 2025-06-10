import { useState } from "react";
import CardUser from "../../components/CardUser";
import ListUser from "../../components/ListUser";
import "../../css/Register.css";

const Register = () => {
  const users = [
    {
      id: "000001",
      nome: "Matheus Rodrigues De Lima",
      cpf: "482.437.808-74",
      admissa: "10/05/2024",
      nascimento: "31/05/2003",
    },
    {
      id: "000002",
      nome: "Outro Usuário",
      cpf: "123.456.789-00",
      admissa: "10/05/1999",
      nascimento: "15/08/1995",
    },
    {
      id: "000003",
      nome: "Outro do outro Usuário",
      cpf: "123.656.488-00",
      admissa: "10/05/2017",
      nascimento: "30/06/1975",
    }
  ];

  const [userActive, setuserActive] = useState(null);

  return (
    <div className="register">
      <p className="title">Gestão de pessoas</p>
      <div className="card-div">
        <CardUser title="Funcionários" quantify="145" />
        <CardUser title="Alunos" quantify="1.345" />
        <CardUser title="Responsáveis" quantify="545" />
        <CardUser title="Voluntários" quantify="399" />
      </div>

      <div className="card-actions">
        <button>Inserir</button>
        <button>Visualizar</button>
        <button>Alterar</button>
        <button>Outras Opções</button>
      </div>

      <div className="card-list-user">
        <table>
          <thead>
            <tr>
              <td className="list-id">ID</td>
              <td className="list-name">Nome</td>
              <td className="list-cpf">CPF</td>
              <td className="list-datanasc">Data Admissa.</td>
              <td className="list-datanasc">Data Nasc.</td>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <ListUser
                key={user.id}
                user={user}
                ativo={userActive === user.id}
                onClick={() => setuserActive(user.id)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Register;
