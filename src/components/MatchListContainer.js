import React from "react";
import PaginationWidget from "./PaginationWidget";
import MatchCard from "./MatchCard";
const MatchListContainer = ({
  matchData,
  setMatchData,
  amount,
  setAmount,
  start,
  setStart,
  update,
  setUpdate,
  gameVersion,
  page,
  setPage,
}) => {
  return (
    <div className="MatchList lg:float-right mt-4 2xl:mr-60 xl:mr-0 lg:w-5/12 md:w-11/12 md:ml-9 float-left sm:w-11/12 sm:ml-6 ">
      {matchData ? (
        matchData.matchListDetails.map((match) => (
          <MatchCard match={match} gameVersion={gameVersion} />
        ))
      ) : (
        <></>
      )}
      <PaginationWidget
        matchData={matchData}
        setMatchData={setMatchData}
        amount={amount}
        setAmount={setAmount}
        start={start}
        setStart={setStart}
        update={update}
        setUpdate={setUpdate}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export default MatchListContainer;
