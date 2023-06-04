import React, { useState } from "react";

const MatchCard = ({ match, gameVersion }) => {
  let redTeam = [];
  let blueTeam = [];
  let championNames = [];
  let championImages = [];
  let winningTeam = true;
  try {
    for (let i = 0; i < 5; i++) {
      redTeam = [
        ...redTeam,
        {
          summonerName: match.matchDetails.info.participants[i].summonerName,
          championName: match.matchDetails.info.participants[i].championName,
          championImage: `http://ddragon.leagueoflegends.com/cdn/${gameVersion}/img/champion/${match.matchDetails.info.participants[i].championName}.png`,
          kills: match.matchDetails.info.participants[i].kills,
          deaths: match.matchDetails.info.participants[i].deaths,
          assists: match.matchDetails.info.participants[i].assists,
          win: match.matchDetails.info.participants[i].win,
        },
      ];
    }
    for (let i = 5; i < 10; i++) {
      blueTeam = [
        ...blueTeam,
        {
          summonerName: match.matchDetails.info.participants[i].summonerName,
          championName: match.matchDetails.info.participants[i].championName,
          championImage: `http://ddragon.leagueoflegends.com/cdn/${gameVersion}/img/champion/${match.matchDetails.info.participants[i].championName}.png`,
          kills: match.matchDetails.info.participants[i].kills,
          deaths: match.matchDetails.info.participants[i].deaths,
          assists: match.matchDetails.info.participants[i].assists,
          win: match.matchDetails.info.participants[i].win,
        },
      ];
    }
    if (redTeam[0].win) winningTeam = true;
    else winningTeam = false;
  } catch (err) {
    console.log(err);
  }

  return (
    <div className="card w-12/12 bg-inherit border-2 rounded-lg border-gray-700 shadow-xl m-2">
      <div className="card-body">
        <ul className="red-team list-group w-2/4 float-left">
          {redTeam.map((player) => {
            return (
              <li
                className={`list-group-item h-10 sm:h-8 ${
                  winningTeam ? "bg-blue-200" : "bg-red-200"
                } bg-opacity-30 p-1`}
              >
                <div className="flex items-center justify-between">
                  <img
                    src={player.championImage}
                    className="w-6 rounded-lg border-2 border-gray-700 "
                  />
                  <p className="text-white text-xs xl:text-sm overflow-clip">
                    {player.summonerName}
                  </p>
                  <p className="text-gray-300">
                    {player.kills}/{player.deaths}/{player.assists}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
        <ul className="red-team list-group w-2/4 float-right">
          {blueTeam.map((player) => {
            return (
              <li
                className={`list-group-item h-10 sm:h-8 ${
                  !winningTeam ? "bg-blue-200" : "bg-red-200"
                } bg-opacity-30 p-1`}
              >
                <div className="flex items-center justify-between">
                  <img
                    src={player.championImage}
                    className="w-6 rounded-lg border-2 border-gray-700 "
                  />
                  <p className="text-white text-xs xl:text-sm overflow-clip">
                    {player.summonerName}
                  </p>
                  <p className="text-gray-300">
                    {player.kills}/{player.deaths}/{player.assists}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MatchCard;
