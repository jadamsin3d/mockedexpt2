import React, { useContext } from "react";
import { PokeContext } from "../../context/index";

const MonData = () => {
  const appContext = useContext(PokeContext);
  const { mon, speciesData, imgUrl } = appContext;
  let secondtype = mon.types[1];

  return (
    <div>
      <h1>Name: {mon.name.charAt(0).toUpperCase() + mon.name.slice(1)}</h1>
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
            <p>
              Regular
              <img src={mon.sprites.front_default} alt="regular" />
            </p>
          </span>
          <span>
            <p>
              Shiny
              <img src={mon.sprites.front_shiny} alt="shiny" />
            </p>
          </span>
        </div>
      )}
      <div>
        <h3>Base Stats:</h3>
        <p>Base HP: {mon.stats[5].base_stat}</p>
        <p>Base Attack: {mon.stats[4].base_stat}</p>
        <p>Base Defense: {mon.stats[3].base_stat}</p>
        <p>Base Speed: {mon.stats[0].base_stat}</p>
        <p>Base Special Attack: {mon.stats[2].base_stat}</p>
        <p>Base Special Defense: {mon.stats[1].base_stat}</p>
      </div>
      <div>
        <h3>Fun Facts:</h3>
        {speciesData === [] ? <p>Retrieving info</p> : <p>{speciesData}</p>}
      </div>
    </div>
  );
};

export default MonData;
