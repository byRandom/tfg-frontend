import React from "react";
import "./SearchBar.css";
const SearchBar = ({
  setSummonerName,
  summonerName,
  navBarVisible,
  setNavbarVisible,
  update,
  setUpdate,
}) => {
  let handleSubmit = (e) => {
    setNavbarVisible(false);
    e.preventDefault();
    if (summonerName.trim()) setNavbarVisible(true);
    setUpdate(!update);
  };
  let handleChange = (e) => {
    setSummonerName(e.target.value);
  };

  return (
    <form className="container" onSubmit={(e) => handleSubmit(e)}>
      <input
        className="form-control h-10 w-2/3 sm:w-2/6"
        id="exampleDataList"
        placeholder="Escriba el nombre del jugador..."
        data-bs-theme="dark"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <button class="btn btn-outline-success" type="submit">
        <span class="bi bi-search" data-bs-theme="dark"></span>
      </button>
    </form>
  );
};

export default SearchBar;
