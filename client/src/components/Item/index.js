import React, {useContext} from 'react'
import { PokeContext } from '../../context/index'
import './style.css'

const Item = ({item, name}) => {
  const appContext = useContext(PokeContext)
  const { imgUrl } = appContext

  return (
    <div url={item.url} className="pokeItem">
      <span>{("00" + item.url.split("/", 7).pop()).slice(-3)}</span>
      <img
        src={imgUrl + item.url.split("/", 7).pop() + ".png"}
        alt="pokeimage"
        width="75px"
      />
      <span key={item.name}>{name}</span>
    </div>
  );
};

export default Item
