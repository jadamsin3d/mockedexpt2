import React, { useState, useEffect } from "react";

const PokeContext = React.createContext();

const PokeProvider = props => {
  const imgUrl ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);

  const findPokemon = async e => {
    const URL = "https://pokeapi.co/api/v2/pokemon/?limit=840";
    let pokeArray = {};
    let result;
    e.preventDefault();
    try {
      setLoading(true);
      const pokeData = await fetch(URL);
      const data = await pokeData.json();
      pokeArray = data.results;
      result = pokeArray.filter(function(pokemon) {
        return pokemon.name.includes(search);
      });
      setList(result);
      setLoading(false);
    } catch (err) {
      if (err) {
        console.log(err.message, "This is the error displayed");
      }
    }
  };

  const handleSearchChange = e => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    async function fetchStarterList() {
      const apiBaseUrl = "https://pokeapi.co/api/v2/pokemon/?limit=151";
      try {
        const pokeData = await fetch(apiBaseUrl);
        const data = await pokeData.json();
        setList(data.results);
        setLoading(false);
      } catch (err) {
        if (err) {
          console.log(err.message, "This is the error displayed");
        }
      }
    };
    fetchStarterList()
  }, []);

  return (
    <PokeContext.Provider
      value={{
        loading,
        search,
        list,
        imgUrl,
        handleSearchChange,
        findPokemon
      }}
    >
      {props.children}
    </PokeContext.Provider>
  );
};
const PokeConsumer = PokeContext.Consumer;

export { PokeContext, PokeProvider, PokeConsumer };
