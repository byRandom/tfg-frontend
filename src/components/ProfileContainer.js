import React, { useEffect, useState } from "react";

const ProfileContainer = ({
  summonerData,
  navBarVisible,
  update,
  setUpdate,
}) => {
  const [profilePicture, setProfilePicture] = useState(
    summonerData?.imageUrl || ""
  );
  const [summonerName, setSummonerName] = useState(summonerData?.name || "");
  const [summonerLevel, setSummonerLevel] = useState(
    summonerData?.summonerLevel || ""
  );
  const [rank, setRank] = useState(summonerData?.rank || "");
  const [league, setLeague] = useState(summonerData?.league || "");
  const [leaguePoints, setLeaguePoints] = useState(
    summonerData?.leaguePoints || ""
  );
  const [wins, setWins] = useState(summonerData?.wins || "");
  const [losses, setLosses] = useState(summonerData?.losses || "");
  const [winrate, setWinrate] = useState(summonerData?.winrate || "");
  const [leagueImage, setLeagueImage] = useState(
    summonerData
      ? summonerData.league
        ? `/assets/${summonerData.league.toLowerCase()}.png`
        : ""
      : ""
  );

  useEffect(() => {
    if (summonerData) {
      setProfilePicture(summonerData.imageUrl || "");
      setSummonerName(summonerData.name || "");
      setSummonerLevel(summonerData.summonerLevel || "");
      setRank(summonerData.rank || "");
      setLeague(summonerData.league || "");
      setLeaguePoints(summonerData.leaguePoints || "");
      setWins(summonerData.wins || "");
      setLosses(summonerData.losses || "");
      setWinrate(summonerData.winrate || "");
      setLeagueImage(
        summonerData.league
          ? `/assets/${summonerData.league.toLowerCase()}.png`
          : ""
      );
    }
  }, [summonerData]);
  return (
    <>
      <div className="w-11/12 lg:w-72 xl:w-80 2xl:w-96 border-2 rounded-lg border-gray-700 shadow-xl lg:m-32 ml-5 m-6 float-left">
        <div className="max-w rounded overflow-hidden shadow-lg">
          <img
            className="w-36 align-middle m-auto mb-0 rounded-full p-4"
            src={profilePicture}
            alt="Summoner icon"
          />
          <div>
            <h3 className="text-white text-lg text-center mt-0">
              {summonerName}
            </h3>
          </div>
          <div className="px-1 pt-1 pb-1">
            {leagueImage ? (
              <img
                src={leagueImage}
                className="w-32 align-middle m-auto mt-0"
                alt="League"
              />
            ) : (
              <></>
            )}
            <h2 className="text-white text-lg text-center mt-0">
              Level: {summonerLevel}
            </h2>
            {leagueImage ? (
              <h3 className="text-white text-lg text-center mt-0">
                League: {league} {rank}
              </h3>
            ) : (
              <></>
            )}
            {leagueImage ? (
              <h3 className="text-white text-lg text-center mt-0">
                {wins}W {losses}L
              </h3>
            ) : (
              <></>
            )}
            {leagueImage ? (
              <h2 className="text-white text-lg text-center mt-0">
                {leaguePoints} LP
              </h2>
            ) : (
              <></>
            )}
            {leagueImage ? (
              <h2 className="text-white text-lg text-center mt-0">
                Winrate: {winrate}%
              </h2>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileContainer;
