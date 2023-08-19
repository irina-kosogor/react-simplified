import { useEffect, useState } from "react";
import User from "./components/User";
import "./App.css";

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/user.json");
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <User data={userData} />
    </div>
  );
}

export default App;
