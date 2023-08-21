import { useState } from "react";
import { useEffect } from "react";
import Loading from "./Loading";
import UserList from "./UserList";

const apiUrl = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setUsers(data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return <>{isLoading ? <Loading /> : <UserList users={users} />}</>;
}

export default App;
