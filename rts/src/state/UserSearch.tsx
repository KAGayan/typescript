import { useState } from "react";

const users = [
  { name: "one", age: 20 },
  { name: "two", age: 21 },
  { name: "three", age: 22 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onClick = () => {
    setName("");
    const foundUser = users.find((user) => user.name === name);
    setUser(foundUser);
  };

  return (
    <div>
      User Search
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Find User</button>
      <p>
        {user?.name} {user?.age}
      </p>
    </div>
  );
};

export default UserSearch;
