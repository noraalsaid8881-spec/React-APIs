/**/
import { useState, useEffect } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import UserList from "./components/UserList";
import "./style/App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");
  const [reset, setReset] = useState(0);
  const [sortAsc, setSortAsc] = useState(true);
  const [searchType, setSearchType] = useState("name");

  const filteredUsers = users.filter((user) => {
    if (searchType === "name") {
      return user.name.toLowerCase().includes(search.toLowerCase());
    }
    return user.address.city.toLowerCase().includes(search.toLowerCase());
  });

  const sortUsers = [...filteredUsers].sort((a, b) => {
    if (sortAsc) {
      return a.name.localeCompare(b.name);
    }
    return b.name.localeCompare(a.name);
  });

  useEffect(() => {
    async function getUsers() {
      setLoading(true);
      setError(false);

      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );

        if (!response.ok) {
          throw new Error("Error pleas try again in other time ");
        }

        const data = await response.json();

        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    getUsers();
  }, [reset]);

  return (
    <>
      <Header />
      <Counter />
      <SearchBar
        setSearch={setSearch}
        searchType={searchType}
        setSearchType={setSearchType}
      />

            <p>type:{searchType}</p>

      {loading && <p>please wait users is loading... </p>}

      {error && <p>{error}</p>}

      {!loading && !error && <UserList users={sortUsers} />}
      <button onClick={() => setReset(reset + 1)}>Reset</button>
      <button onClick={() => setSortAsc(!sortAsc)}>
        {sortAsc ? "A → Z" : "Z → A"}
      </button>
            <p>type:{searchType}</p>
      <p>{search}</p>
    </>
  );
}

export default App;