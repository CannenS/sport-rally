import React from "react";
import { FaSearch } from "react-icons/fa";

function Form({ handleSubmit, query, players, isLoading, setQuery }) {
  return (
    <div className="form-box">
      {players.length === 0 && !isLoading && <h1>/Search/</h1>}
      {isLoading ? null : (
        <form
          className={
            players.length === 0 ? "search-form " : "search-form active"
          }
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-btn">
            <FaSearch />
          </button>
        </form>
      )}
    </div>
  );
}

export default Form;
