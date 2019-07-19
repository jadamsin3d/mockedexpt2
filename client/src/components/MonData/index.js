import React, { useContext } from "react";
import { PokeContext } from "../../context/index";

const MonData = () => {
  const appContext = useContext(PokeContext);
  const { mon } = appContext;

  return (
    <div>
      <h1>Name: {mon.name}</h1>
      <div>
        <span>
          <p>Regular</p>
          <img src={mon.sprites.front_default} alt="regular"/>
        </span>
        <span>
          <p>Shiny</p>
          <img src={mon.sprites.front_shiny} alt="shiny"/>
        </span>
      </div>
    </div>
  );
};

export default MonData;
