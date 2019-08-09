import React, { useContext } from "react"
import Item from "../Item/index"
import { PokeContext } from "../../context/index"
import './style.css'

const List = () => {
  const appContext = useContext(PokeContext)
  const { list } = appContext

  return (
    <div className="pokeList">
      {list.map(item => {
        return <Item item={item} key={item.name} url={item.url} />
      })}
    </div>
  );
};

export default List
