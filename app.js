import { useState } from "react";

const users = ["Luka", "Mark", "Ana", "Petra", "Miha", "Barbara", "Janez"];

export default function App() {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  console.log("APP RENDER");

  const filteredUsers = users.filter((user) =>
    user.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <h1>React Render Demo</h1>

      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={() => setCount(count + 1)}>Counter: {count}</button>

      <ul>
        {filteredUsers.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
}
