import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "./tradeMark.png";
import Player from "./Player";
import ReactDOM from "react-dom";
import { FaSearch } from "react-icons/fa";

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [players, setPlayers] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);

  const url = "https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=";

  const fetchPlayers = async (searchValue) => {
    setIsLoading(true);

    try {
      const response = await fetch(`${url}${searchValue}`);
      const data = await response.json();
      console.log(data);

      if (data.player) {
        setPlayers(data.player);
      } else {
        setError(true);
      }
      setIsLoading(false);
      setQuery("");
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  const refreshPage = () => {
    window.location.reload();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPlayers(query);
  };

  if (error) {
    return (
      <main className="error-page">
        <h1>Opps. There was an error! Please try your search again.</h1>

        <button className="btn" onClick={() => setError(false)}>
          Back Home
        </button>
      </main>
    );
  }

  return (
    <main>
      <div className="nav">
        <img src={logo} alt="" className="logo" />
        <Link
          to="/"
          onClick={() => refreshPage()}
          style={{ textDecoration: "none" }}
        >
          <p>Home</p>
        </Link>
        <Link to="/About" style={{ textDecoration: "none" }}>
          <p>About</p>
        </Link>
        <Link to="/About" style={{ textDecoration: "none" }}>
          <p>Pages</p>
        </Link>
        <Link to="/About" style={{ textDecoration: "none" }}>
          <p>Players</p>
        </Link>
      </div>

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
      <div className="results-box">
        {isLoading ? (
          <h1 className="load">
            Is Loading<span>.</span>
            <span>.</span>
            <span>.</span>
          </h1>
        ) : (
          players.map((player) => {
            const {
              idPlayer: id,
              strPlayer: name,
              strThumb: image,
              strDescriptionEN: info,
            } = player;

            if (image && info) {
              return (
                <div className="player-card">
                  <img src={image} alt={name} />
                  <Link
                    to={`/player/${id}`}
                    onClick={() => console.log("dog")}
                    className="name-link"
                  >
                    {name}
                  </Link>
                </div>
              );
            } else {
              return;
            }
          })
        )}
      </div>
    </main>
  );
}

export default Home;
