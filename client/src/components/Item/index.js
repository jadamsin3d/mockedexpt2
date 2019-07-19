import React, {useContext} from 'react'
import { PokeContext } from '../../context/index'
import './style.css'

const Item = ({item, url}) => {
  const appContext = useContext(PokeContext)
  const { imgUrl, getMonData } = appContext

  return (
    <div url={url} className="pokeItem" onClick={getMonData}>
      <span url={url}>{("00" + item.url.split("/", 7).pop()).slice(-3)}</span>
      <img
        src={imgUrl + item.url.split("/", 7).pop() + ".png"}
        alt="pokeimage"
        width="75px"
        url={url}
      />
      <span key={item.name} url={url}>{item.name}</span>
    </div>
  );
};

export default Item
