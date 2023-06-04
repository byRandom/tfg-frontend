import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import PageTitle from "../components/PageTitle";
import ProfileContainer from "../components/ProfileContainer";
import axios from "axios";
import MatchListContainer from "../components/MatchListContainer";
import LoadingSpinner from "../components/LoadingSpinner";
const HomePage = () => {
  const [summonerName, setSummonerName] = useState("");
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [update, setUpdate] = useState(false);
  const api = "192.168.2.25:5000";
  const [summonerData, setSummonerData] = useState(null);
  const [matchData, setMatchData] = useState(null);
  const [championMasteries, setChampionMasteries] = useState(null);
  const [amount, setAmount] = useState(10);
  const [start, setStart] = useState(0);
  const [gameVersion, setGameVersion] = useState("13.11.1");
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    try {
      axios
        .get(`http://${api}/api/summoner/${summonerName}`)
        .then((data) => {
          setIsLoading(true);
          setSummonerData(data.data);
        })
        .then(() =>
          axios.get(
            encodeURI(
              `http://${api}/api/match-list-details/${summonerName}/${start}/${20}`
            )
          )
        )
        .then(() => {
          axios
            .get(
              encodeURI(`http://${api}/api/championMasteries/${summonerName}`)
            )
            .then((data) => console.log(data.data))
            .then(() => {
              axios
                .get(
                  encodeURI(
                    `http://${api}/api/match-list-details/${summonerName}/${start}/${amount}`
                  )
                )
                .then((data) => setMatchData(data.data))
                .then(() =>
                  axios
                    .get(
                      `https://ddragon.leagueoflegends.com/api/versions.json`
                    )
                    .then((data) => {
                      setGameVersion(data.data[0]);
                      console.debug(data.data[0]);
                    })
                    .then(() => setIsLoading(false))
                );
            });
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  }, [update]);
  console.log(summonerData);

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <Navbar
        summonerName={summonerName}
        setSummonerName={setSummonerName}
        navBarVisible={navbarVisible}
        setNavbarVisible={setNavbarVisible}
        update={update}
        setUpdate={setUpdate}
        setStart={setStart}
      />
      {navbarVisible ? <></> : <PageTitle navBarVisible={navbarVisible} />}
      {navbarVisible ? (
        <ProfileContainer
          summonerData={summonerData}
          navBarVisible={navbarVisible}
          update={update}
          setUpdate={setUpdate}
        />
      ) : (
        <></>
      )}
      {navbarVisible ? (
        isLoading ? (
          <LoadingSpinner />
        ) : (
          <MatchListContainer
            matchData={matchData}
            setMatchData={setMatchData}
            amount={amount}
            setAmount={setAmount}
            start={start}
            setStart={setStart}
            update={update}
            setUpdate={setUpdate}
            gameVersion={gameVersion}
            page={page}
            setPage={setPage}
          />
        )
      ) : (
        <> </>
      )}
      {navbarVisible ? (
        <></>
      ) : (
        <SearchBar
          summonerName={summonerName}
          setSummonerName={setSummonerName}
          navBarVisible={navbarVisible}
          setNavbarVisible={setNavbarVisible}
          update={update}
          setUpdate={setUpdate}
        />
      )}
    </>
  );
};

export default HomePage;
