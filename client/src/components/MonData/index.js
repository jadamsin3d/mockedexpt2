import React, { useContext } from "react";
import { PokeContext } from "../../context/index";
import './style.css'

const MonData = () => {
  const appContext = useContext(PokeContext);
  const { mon, speciesData, imgUrl } = appContext;
  let secondtype = mon.types[1];

  function classChangeOne() {

  }

  return (
    <div className="monData">
      <h1 className="monName" >{mon.name.charAt(0).toUpperCase() + mon.name.slice(1)}</h1>
      <div>
        <span className="typeOne">{mon.types[0].type.name}</span>
        {secondtype === undefined ? null : (
          <span className="typeTwo">{mon.types[1].type.name}</span>
        )}
      </div>
      {mon.sprites.front_default === null ? (
        <img src={imgUrl + String(mon.id) + ".png"} alt="backuppic" />
      ) : (
          <div>
            <span>
              <div className="regDiv">Regular:</div>
              <img src={mon.sprites.front_default} alt="regular" />
            </span>
            <span>
              <div className="regDiv">Shiny:</div>
              <img src={mon.sprites.front_shiny} alt="shiny" />
            </span>
          </div>
        )}
      <div>
        <h3>Base Stats:</h3>
        <p>HP: {mon.stats[5].base_stat}</p>
        <p>Attack: {mon.stats[4].base_stat}</p>
        <p>Defense: {mon.stats[3].base_stat}</p>
        <p>Speed: {mon.stats[0].base_stat}</p>
        <p>Sp. Attack: {mon.stats[2].base_stat}</p>
        <p>Sp. Defense: {mon.stats[1].base_stat}</p>
      </div>
      <div>
        <h3>Fun Facts:</h3>
        {speciesData === [] ? <p>Retrieving info</p> : <p>{speciesData}</p>}
      </div>
    </div>
  );
};

export default MonData;
