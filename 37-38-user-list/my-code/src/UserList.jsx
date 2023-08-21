import User from "./User";

function UserList({ users }) {
  return (
    <>
      <h1>User List</h1>
      <ul>
        {users.map((user) => {
          return <User name={user.name} key={user.id} />;
        })}
      </ul>
    </>
  );
}

export default UserList;
