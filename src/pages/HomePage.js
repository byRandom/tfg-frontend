import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import PageTitle from "../components/PageTitle";
import ProfileContainer from "../components/ProfileContainer";
import axios from "axios";
import PaginationWidget from "../components/PaginationWidget";
import MatchListContainer from "../components/MatchListContainer";
const HomePage = () => {
  const [summonerName, setSummonerName] = useState("");
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [update, setUpdate] = useState(false);
  const api = "127.0.0.1:5000";
  const [summonerData, setSummonerData] = useState(null);
  const [matchData, setMatchData] = useState(null);
  const [championMasteries, setChampionMasteries] = useState(null);
  const [amount, setAmount] = useState(10);
  const [start, setStart] = useState(0);
  useEffect(() => {
    axios
      .get(`http://${api}/api/summoner/${summonerName}`)
      .then((data) => setSummonerData(data.data))
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(encodeURI(`http://${api}/api/championMasteries/${summonerName}`))
      .then((data) => console.log(data.data))
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(
        encodeURI(
          `http://${api}/api/match-list-details/${summonerName}/${start}/${amount}`
        )
      )
      .then((data) => setMatchData(data.data))
      .catch((err) => {
        console.log(err);
      });
  }, [update]);
  console.log(summonerData);

  return (
    <>
      <Navbar
        summonerName={summonerName}
        setSummonerName={setSummonerName}
        navBarVisible={navbarVisible}
        setNavbarVisible={setNavbarVisible}
        update={update}
        setUpdate={setUpdate}
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
      <MatchListContainer
        matchData={matchData}
        setMatchData={setMatchData}
        amount={amount}
        setAmount={setAmount}
        start={start}
        setStart={setStart}
      />
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
