import React, { useState, useEffect } from "react";

const PokeContext = React.createContext();

const PokeProvider = props => {
  const imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
  const apiBaseUrl = "https://pokeapi.co/api/v2/pokemon/?limit=151";
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);

  const fetchStarterList = async () => {
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

  useEffect(() => {
    fetchStarterList();
  }, []);

  return (
    <PokeContext.Provider
      value={{
        loading,
        search,
        list,
        imgUrl
      }}
    >
      {props.children}
    </PokeContext.Provider>
  );
};
const PokeConsumer = PokeContext.Consumer;

export { PokeContext, PokeProvider, PokeConsumer };
