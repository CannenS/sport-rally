import React from "react";
import { Link } from "react-router-dom";

function Results({ players, isLoading }) {
  return (
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
                <img
                  src={
                    image
                      ? image
                      : "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg"
                  }
                  alt={name}
                />
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
  );
}

export default Results;
