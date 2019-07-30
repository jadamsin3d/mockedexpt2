import React, { useContext } from 'react'
import List from '../components/List/index'
import Search from '../components/Search/index'
import MonData from '../components/MonData/index'
import { PokeContext } from '../context/index'
import "./style.css"

function Landing() {
  const appContext = useContext(PokeContext)
  const { loading, search, mon } = appContext
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="searchDiv">
            <Search />
            {loading ? (
              <h1 className="text-center">
                ...accessing PokeServer for {search} data
              </h1>
            ) : (
              <List />
            )}
          </div>
        </div>
        <div className="col-md-6 monResults">
          {mon.length === 0 ? <h1>Click a pokemon to find out more</h1> : <MonData />}
        </div>
      </div>
    </div>
  );
}

export default Landing