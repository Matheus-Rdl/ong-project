import "./ListUser.css";

const ListUser = ({user, ativo, onClick}) => {

  console.log(user.nascimento)
  return (
    <tr
      className={ativo ? "list-user-active" : "list-user"}
      onClick={onClick}
    >
      <td>{user.id}</td>
      <td>{user.nome}</td>
      <td>{user.cpf}</td>
      <td>{user.admissa}</td>
      <td>{user.nascimento}</td>
    </tr>
  );
};

export default ListUser;