import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Home from "./Home";
import logo from "./tradeMark.png";
import Nav from "../components/Nav";

function Player() {
  const { id } = useParams();
  const [player, setPlayer] = useState([]);
  const [loading, setLoading] = useState(false);

  const playerUrl =
    "https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=";

  const fetchPlayer = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${playerUrl}${id}`);
      const data = await response.json();
      console.log(data.players);
      setPlayer(data.players);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPlayer();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h2>Is loading</h2>
      </div>
    );
  }

  return (
    <main className="main">
      <Nav />
      <div className="player-box">
        {player.map((item) => {
          const {
            dateBorn: born,
            strBirthLocation: birthPlace,
            strHeight: height,
            strPlayer: name,
            strThumb: image,
            strDescriptionEN: info,
          } = item;
          return (
            <div className="info-card">
              <div className="info-main">
                <div className="img-container">
                  <img src={image} alt={name} className="info-image" />
                </div>
                <div className="info-container">
                  <h2>{name}</h2>
                  <p>
                    <span>BirthPlace</span> : {birthPlace}
                  </p>
                  <p>
                    <span>Birthday</span> : {born}
                  </p>
                  <p>
                    <span>Height</span> : {height}
                  </p>
                </div>
              </div>
              <div className="info-text">
                <p>{info}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Player;
