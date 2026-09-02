import { useState } from "react";
import "../style/SearchBar.css";

function SearchBar({ setSearch , searchType, setSearchType }) {
  const [inputValue, setInputValue] = useState("");

  function searchUsers() {
    setSearch(inputValue);
  }

  function handleKeyDown() {
    searchUsers();
  }

  function clearSearch() {
    setSearch("");
    setInputValue("");
  }

  return (
    <div className="search-box">
      <button onClick={()=>setSearchType(searchType === "name" ? "city":"name")}>{searchType === "name" ? "search by name":"search by city"}</button>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="search in users... "
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={searchUsers}>search</button>
      <button onClick={clearSearch}>clear</button>

    </div>
  );
}

export default SearchBar;
