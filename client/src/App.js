import React, { useContext } from "react";
import "./App.css";
import List from "./components/List/index";
import { PokeContext } from "./context/index";

function App() {
  const appContext = useContext(PokeContext);
  const { loading, search } = appContext;
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div>
            {loading ? (
              <h1 className="text-center">
                ...accessing PokeServer for {search} data
              </h1>
            ) : (
              <List />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
