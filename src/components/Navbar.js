import React, { useEffect } from "react";

const Navbar = ({
  setSummonerName,
  summonerName,
  navBarVisible,
  setNavbarVisible,
  update,
  setUpdate,
}) => {
  const onChange = (e) => {
    setSummonerName(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setUpdate(!update);
  };
  useEffect(() => {}, [navBarVisible]);
  return (
    <>
      {navBarVisible ? (
        <nav
          className="navbar navbar-expand-lg bg-body-tertiary"
          data-bs-theme="dark"
        >
          <div className="container-fluid">
            <form
              class="d-flex mx-auto"
              role="search"
              onSubmit={(e) => {
                onSubmit(e);
              }}
            >
              <input
                class="form-control me-2"
                type="search"
                placeholder="Nombre de jugador"
                aria-label="Search"
                value={summonerName}
                onChange={(e) => onChange(e)}
              />
              <button class="btn btn-outline-success" type="submit">
                <span class="bi bi-search"></span>
              </button>
            </form>
          </div>
        </nav>
      ) : (
        <></>
      )}
    </>
  );
};

export default Navbar;
