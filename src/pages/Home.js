import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "./tradeMark.png";
import Player from "./Player";

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [players, setPlayers] = useState([]);
  const [query, setQuery] = useState("");

  const url = "https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=";

  const fetchPlayers = async (searchValue) => {
    setIsLoading(true);

    try {
      const response = await fetch(`${url}${searchValue}`);
      const data = await response.json();
      console.log(data.player);
      setPlayers(data.player);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPlayers(query);
  };

  return (
    <main>
      <div className="nav">
        <img src={logo} alt="" className="logo" />
        <Link to="/" style={{ textDecoration: "none" }}>
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
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-btn">
            Submit
          </button>
        </form>
      </div>
      <div className="results-box">
        {isLoading ? (
          <h1>Is Loading...</h1>
        ) : (
          players.map((player) => {
            const { idPlayer: id, strPlayer: name, strThumb: image } = player;

            if (image) {
              return (
                <div className="player-card">
                  <img src={image} alt={name} />
                  <Link to={`/player/${id}`} onClick={() => console.log("dog")}>
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
