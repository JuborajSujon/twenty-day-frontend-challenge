import { useEffect, useState } from "react";

const User = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const teamStyle = {
    border: "1px solid black",
    padding: "10px",
    margin: "10px",
    borderRadius: "10px",
  };
  return (
    <div style={teamStyle}>
      <h3>User: {user.length}</h3>
      {user.map((user) => (
        <div key={user.id}>
          <h4>Name: {user.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default User;
