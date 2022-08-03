import { useState } from "react";
import Main from "./components/Main";
import Nav from "./components/Nav";

function App() {
  const [color, setColor] = useState("");
  const [secondColor, setSecondColor] = useState("");
  const [searchPokemon, setSearchPokemon] = useState("");
  const [getdata, setGetdata] = useState(false);
  return (
    <>
      <div className="grid-all">
        <Nav
          color={color}
          secondColor={secondColor}
          setSearchPokemon={setSearchPokemon}
          setGetdata={setGetdata}
        />
        <div className="center-and-bg">
          <Main
            setColor={setColor}
            setSecondColor={setSecondColor}
            searchPokemon={searchPokemon}
            getdata={getdata}
            setGetdata={setGetdata}
          />
        </div>
      </div>
    </>
  );
}

export default App;
