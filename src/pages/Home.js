import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "./tradeMark.png";
import Player from "./Player";
import Results from "../components/Results";
import ReactDOM from "react-dom";
import Nav from "../components/Nav";
import Form from "../components/Form";

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
      <Nav />

      <Form
        handleSubmit={handleSubmit}
        query={query}
        players={players}
        isLoading={isLoading}
        setQuery={setQuery}
      />
      <Results players={players} isLoading={isLoading} />
    </main>
  );
}

export default Home;
