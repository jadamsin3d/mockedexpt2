import React, { useContext } from "react";
import { PokeContext } from "../../context/index";

const MonData = () => {
  const appContext = useContext(PokeContext);
  const { mon, speciesData, imgUrl } = appContext;

  return (
    <div>
      <h1>Name: {mon.name.charAt(0).toUpperCase() + mon.name.slice(1)}</h1>
      {mon.sprites.front_default === null ? (
        <img src={imgUrl + String(mon.id) + ".png"} alt="backuppic" />
      ) : (
        <div>
          <span>
            <p>Regular
            <img src={mon.sprites.front_default} alt="regular" />
            </p>
          </span>
          <span>
            <p>Shiny
            <img src={mon.sprites.front_shiny} alt="shiny" />
            </p>
          </span>
        </div>
      )}
      <div>
        <p>Stats go here</p>
      </div>
      {speciesData === [] ? <p>Retrieving info</p> : <p>{speciesData}</p>}
    </div>
  );
};

export default MonData;
