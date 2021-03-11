import { useEffect, useRef, useState } from "react";

const users = [
  { name: "one", age: 20 },
  { name: "two", age: 21 },
  { name: "three", age: 22 },
];

const UserSearchRef: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const onClick = () => {
    setName("");
    const foundUser = users.find((user) => user.name === name);
    setUser(foundUser);
  };

  return (
    <div>
      User Search
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Find User</button>
      <p>
        {user?.name} {user?.age}
      </p>
    </div>
  );
};

export default UserSearchRef;
