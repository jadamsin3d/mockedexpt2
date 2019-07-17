import React, { useContext } from 'react'
import List from '../components/List/index'
import Search from '../components/Search/index'
import { PokeContext } from '../context/index'

function Landing() {
  const appContext = useContext(PokeContext)
  const { loading, search } = appContext
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1>PokeDex</h1>
          <div>
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
        <div className="col-md-6">
              <h1>hello</h1>
        </div>
      </div>
    </div>
  );
}

export default Landing