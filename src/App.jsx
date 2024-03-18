import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [userID, setUserID] = useState(1);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(userID);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userID}`
        );
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.log("Error fetching the data");
      }
    };
    fetchData();
    return () => {
      console.log("CleanUp function is called");
    };
  }, [userID]);

  return (
    <>
      <div>
        <h1>Fetch Users</h1>
        <p>By using UseEffect & UseState Hooks</p>
        <p>API used: https://jsonplaceholder.typicode.com/users</p>
        <hr />
        {userData && (
          <div>
            <h2>User Details</h2>
            <p>User Name: {userData.name}</p>
            <p>User Email: {userData.email}</p>
            <p>Contact number: {userData.phone}</p>
          </div>
        )}
        <hr />
        <button onClick={() => setUserID(userID - 1)}>Previous User</button>
        <button onClick={() => setUserID(userID + 1)}>Next User</button>
      </div>
    </>
  );
}

export default App;
