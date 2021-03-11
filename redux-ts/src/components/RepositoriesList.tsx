import React, { FormEvent, useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypeSelector } from "../hooks/useTypeSelector";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();
  const { data, loading, error } = useTypeSelector(
    (state) => state.repositories
  );

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(term);
  };

  return (
    <>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          value={term}
          onChange={(e) => {
            setTerm(e.target.value);
          }}
        />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
    </>
  );
};

export default RepositoriesList;
