import React, { useContext } from "react";
import { PokeContext } from "../../context/index";

function Search() {
  const appContext = useContext(PokeContext)
  const {search, handleSearchChange,findPokemon } = appContext

  return (
    <div className="row">
      <div className="col-md-12">
        <form className="searchForm">
          <input
            type="text"
            id="pokeSearch"
            value={search}
            name="pokefield"
            onChange={handleSearchChange}
            placeholder="search for a pokemon"
          />
          <button
            id="pokeSearchButton"
            onClick={findPokemon}
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Search;
