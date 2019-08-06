import React, { useContext } from "react";
import { PokeContext } from "../../context/index";
import "./style.css";

const MonData = () => {
  const appContext = useContext(PokeContext);
  const { mon, speciesData, imgUrl } = appContext;
  let secondtype = mon.types[1];

  function typeOne() {
    let typeOf =  mon.types[0].type.name
    if(typeOf === "dark") {
      return "typeOneDark"
    } 
    else if(typeOf === "psychic") {
      return "typeOnePsychic"
    }
    else if(typeOf === "fighting") {
      return "typeOneFighting"
    }
    else if(typeOf === "ground") {
      return "typeOneGround"
    }
    else if(typeOf === "electric") {
      return "typeOneElectric"
    }
    else if(typeOf === "bug") {
      return "typeOneBug"
    }
    else if(typeOf === "ice") {
      return "typeOneIce"
    }
    else if(typeOf === "fire") {
      return "typeOneFire"
    }
    else if(typeOf === "water") {
      return "typeOneWater"
    }
    else if(typeOf === "rock") {
      return "typeOneRock"
    }
    else if(typeOf === "fairy") {
      return "typeOneFairy"
    }
    else if(typeOf === "flying") {
      return "typeOneFlying"
    }
    else if(typeOf === "poison") {
      return "typeOnePoison"
    }
    else if(typeOf === "normal") {
      return "typeOneNormal"
    }
    else if(typeOf === "ghost") {
      return "typeOneGhost"
    }
    else if(typeOf === "dragon") {
      return "typeOneDragon"
    }
    else if(typeOf === "grass") {
      return "typeOneGrass"
    }
    else if(typeOf === "steel") {
      return "typeOneSteel"
    }
  }

  function typeTwo() {
    let typeOf =  mon.types[1].type.name
    if(typeOf === "dark") {
      return "typeTwoDark"
    } 
    else if(typeOf === "psychic") {
      return "typeTwoPsychic"
    }
    else if(typeOf === "fighting") {
      return "typeTwoFighting"
    }
    else if(typeOf === "ground") {
      return "typeTwoGround"
    }
    else if(typeOf === "electric") {
      return "typeTwoElectric"
    }
    else if(typeOf === "bug") {
      return "typeTwoBug"
    }
    else if(typeOf === "ice") {
      return "typeTwoIce"
    }
    else if(typeOf === "fire") {
      return "typeTwoFire"
    }
    else if(typeOf === "water") {
      return "typeTwoWater"
    }
    else if(typeOf === "rock") {
      return "typeTwoRock"
    }
    else if(typeOf === "fairy") {
      return "typeTwoFairy"
    }
    else if(typeOf === "flying") {
      return "typeTwoFlying"
    }
    else if(typeOf === "poison") {
      return "typeTwoPoison"
    }
    else if(typeOf === "normal") {
      return "typeTwoNormal"
    }
    else if(typeOf === "ghost") {
      return "typeTwoGhost"
    }
    else if(typeOf === "dragon") {
      return "typeTwoDragon"
    }
    else if(typeOf === "grass") {
      return "typeTwoGrass"
    }
    else if(typeOf === "steel") {
      return "typeTwoSteel"
    }
  }

  return (
    <div className="monData">
      <h1 className="monName">
        {mon.name.charAt(0).toUpperCase() + mon.name.slice(1)}
      </h1>
      <div>
        <span className={typeOne()}>{mon.types[0].type.name}</span>
        {secondtype === undefined ? null : (
          <span className={typeTwo()}>{mon.types[1].type.name}</span>
        )}
      </div>
      {mon.sprites.front_default === null ? (
        <img src={imgUrl + String(mon.id) + ".png"} alt="backuppic" />
      ) : (
        <div>
          <div>
            <div className="regDiv">Regular:</div>
            <img className="regDivImg" src={mon.sprites.front_default} alt="regular" />
          </div>
          <div>
            <div className="regDiv">Shiny:</div>
            <img className="regDivImg" src={mon.sprites.front_shiny} alt="shiny" />
          </div>
        </div>
      )}
      <div className="statsData">
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
