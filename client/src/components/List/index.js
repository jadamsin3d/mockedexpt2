import React, { useContext } from "react";
import Item from "../Item/index";
import { PokeContext } from "../../context/index";

const List = () => {
  const appContext = useContext(PokeContext);
  const { list } = appContext;

  return (
    <div className="pokeList">
      {list.map(item => {
        return <Item item={item} name={item.name} />;
      })}
    </div>
  );
};

export default List;
