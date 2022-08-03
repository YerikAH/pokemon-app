import React, { useEffect, useState } from "react";
import "./styles/status.css";
function Status({ setLoader, loader, search }) {
  const [name, setName] = useState("");
  const [descrip, setDescrip] = useState("");
  const [advice, setAdvice] = useState("");
  const [pokemonid, setPokemonid] = useState("");
  const [type, setType] = useState();
  const [locationPokemon, setLocationPokemon] = useState("");
  const [pp, setPp] = useState("");
  const [power, setPower] = useState("");

  async function getStatusPokemon() {
    try {
      /* get one */
      let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`);
      let json = await res.json();
      /* get two */
      let otherRes = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${search}/`
      );
      let jsonOther = await otherRes.json();
      /* get three */
      let twoRes = await fetch("https://api.adviceslip.com/advice");
      let jsonTwo = await twoRes.json();
      /* get four */
      let fourRes = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${search}/encounters`
      );
      let jsonFour = await fourRes.json();
      /*get five */
      let fiveRes = await fetch(`https://pokeapi.co/api/v2/move/${search}`);
      let jsonFive = await fiveRes.json();
      /* catch err */
      if (!res.ok) throw { status: res.status, statusText: res.statusText };
      /* pokemon name */
      let name = json.name;
      /* pokemon ID */
      let pokemonId = json.id;
      /* description */
      let description = jsonOther.flavor_text_entries[0].flavor_text;
      /* advice */
      let adviceTru = jsonTwo.slip.advice;
      /* type */
      let pokemonType = json.types[0].type.name;
      let pokemonTypeOne;
      if (json.types[1] != undefined) {
        pokemonTypeOne = json.types[1].type.name;
      }
      let allType = [pokemonType, pokemonTypeOne];
      /* location */
      let locationPokemon;
      if (jsonFour[0] != undefined) {
        locationPokemon = jsonFour[0].location_area.name;
      } else {
        locationPokemon = "unknown";
      }
      /* pp */

      let pp = jsonFive.pp;

      /* power */

      let power = jsonFive.power;

      setPower(power);
      setPp(pp);
      setLocationPokemon(locationPokemon);
      setType(allType);
      setDescrip(description);
      setName(name);
      setPokemonid(pokemonId);
      setAdvice(adviceTru);
      setLoader(true);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getStatusPokemon();
  }, []);
  return (
    <div className="status-pokemon">
      {loader && <h1 className="name-pokemon">{name}</h1>}
      {loader && <p className="description-pokemon"> {descrip}</p>}
      {loader && <span className="phrse-pokemon">{advice}</span>}

      <div className="grid-status-pokemon">
        <div className="name-status-pokemon">
          <p>TYPE:</p>
          <p>N° ID:</p>
          <p>LOCATION:</p>
          <p>POWER:</p>
          <p>PP:</p>
        </div>
        <div className="name-status-pokemon-stat">
          {loader && (
            <p>
              {type && type[0]} {type && type[1]}
            </p>
          )}
          {loader && <p>{pokemonid}</p>}
          {loader && <p>{locationPokemon}</p>}
          {/* {loader && <p>{pp}</p>}
          {loader && <p>{power}</p>} */}
          <div className="status-power">
            <div className="completed-power"></div>
          </div>
          <div className="status-pp">
            <div className="completed-pp"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Status;
