import React, { useEffect, useRef, useState } from "react";
import "./styles/show.css";
import "./styles/status.css";
import Loader from "./Loader";
function Main({
  setColor,
  setSecondColor,
  getdata,
  setGetdata,
  searchPokemon,
}) {
  const [loader, setLoader] = useState(false);
  const [pokemonMale, setPokemonMale] = useState("");
  const [pokemonMakeBack, setPokemonMakeBack] = useState("");
  const [pokemonFemale, setPokemonFemale] = useState("");
  const [pokemonFemaleBack, setPokemonFemaleBack] = useState("");
  const [pokemonShiny, setPokemonShiny] = useState("");
  const [pokemonShinyBack, setPokemonShinyBack] = useState("");
  const [pShinyFemale, setPShinyFemale] = useState("");
  const [pShinyFemaleBack, setPShinyFemaleBack] = useState("");
  const [numOne, setNumOne] = useState(1);
  const [action, setAction] = useState(false);
  const [duration, setDuration] = useState(true);

  const [name, setName] = useState("");
  const [descrip, setDescrip] = useState("");
  const [advice, setAdvice] = useState("");
  const [pokemonid, setPokemonid] = useState("");
  const [type, setType] = useState();
  const [locationPokemon, setLocationPokemon] = useState("");
  const [pp, setPp] = useState("");
  const [power, setPower] = useState("");
  const bg = useRef();
  const adviceColor = useRef();
  const cPower = useRef();
  const cPp = useRef();

  let i = 0;
  const [search, setSearch] = useState(25);
  async function getPokemon() {
    try {
      setDuration(false);
      let resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`);
      let jsonp = await resp.json();
      let imagePokemon = jsonp.sprites;
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

      /* pokemon images*/
      let pokemonMale = imagePokemon.front_default;
      let pokemonMaleBack = imagePokemon.back_default;
      let pokemonFemale = imagePokemon.front_female;
      let pokemonFemaleBack = imagePokemon.back_female;
      let pokemonShiny = imagePokemon.front_shiny;
      let pokemonShinyBack = imagePokemon.back_shiny;
      let pShinyFemale = imagePokemon.front_shiny_female;
      let pShinyFemaleBack = imagePokemon.back_shiny_female;
      setPokemonMale(pokemonMale);
      setPokemonMakeBack(pokemonMaleBack);
      setPokemonFemale(pokemonFemale);
      setPokemonFemaleBack(pokemonFemaleBack);
      setPokemonShiny(pokemonShiny);
      setPokemonShinyBack(pokemonShinyBack);
      setPShinyFemale(pShinyFemale);
      setPShinyFemaleBack(pShinyFemaleBack);

      if (pokemonType == "water") {
        bg.current.style.background =
          "linear-gradient(181.09deg, #1B3051 2.02%, #272939 104.92%)";
        adviceColor.current.style.color = "#89D3FC";
        cPower.current.style.backgroundColor = "#89D3FC";
        cPp.current.style.backgroundColor = "#89D3FC";
        setColor("#89D3FC");
        setSecondColor("#262A3C");
      } else if (pokemonType == "fire") {
        bg.current.style.background =
          "linear-gradient(181.09deg, #512B1B 2.02%, #392727 104.92%)";
        adviceColor.current.style.color = "#EE8329";
        cPower.current.style.backgroundColor = "#EE8329";
        cPp.current.style.backgroundColor = "#EE8329";
        setColor("#EE8329");
        setSecondColor("#3C2826");
      } else if (pokemonType == "grass") {
        bg.current.style.background =
          "linear-gradient(181.09deg, #1B5120 2.02%, #27392E 104.92%)";
        adviceColor.current.style.color = "#209483";
        cPower.current.style.backgroundColor = "#209483";
        cPp.current.style.backgroundColor = "#209483";
        setColor("#209483");
        setSecondColor("#263D2C");
      } else if (pokemonType == "electric") {
        bg.current.style.background =
          "linear-gradient(181.09deg, #514B1B 2.02%, #393927 104.92%)";
        adviceColor.current.style.color = "#F6E652";
        cPower.current.style.backgroundColor = "#F6E652";
        cPp.current.style.backgroundColor = "#F6E652";
        setColor("#F6E652");
        setSecondColor("#3D3C26");
      } else if (pokemonType == "ground") {
        bg.current.style.background =
          "linear-gradient(181.09deg, #51351B 2.02%, #393027 104.92%)";
        adviceColor.current.style.color = "#C59C4A";
        cPower.current.style.backgroundColor = "#C59C4A";
        cPp.current.style.backgroundColor = "#C59C4A";
        setColor("#C59C4A");
        setSecondColor("#3D3126");
      } else if (pokemonType == "psychic") {
        bg.current.style.background =
          "linear-gradient(181.09deg, #1F1B51 2.02%, #2B2739 104.92%)";
        adviceColor.current.style.color = "#B44AEE";
        cPower.current.style.backgroundColor = "#B44AEE";
        cPp.current.style.backgroundColor = "#B44AEE";
        setColor("#B44AEE");
        setSecondColor("#2A263C");
      } else if (pokemonType == "rock") {
        bg.current.style.background =
          "linear-gradient(181.09deg, #676767 2.02%, #474545 104.92%)";
        adviceColor.current.style.color = "#B4B49C";
        cPower.current.style.backgroundColor = "#B4B49C";
        cPp.current.style.backgroundColor = "#B4B49C";
        setColor("#B4B49C");
        setSecondColor("#202020");
      } else if (pokemonType == "dragon") {
        bg.current.style.background =
          "linear-gradient(181.09deg, #1B2351 2.02%, #273539 104.92%)";
        adviceColor.current.style.color = "#7BACFF";
        cPower.current.style.backgroundColor = "#7BACFF";
        cPp.current.style.backgroundColor = "#7BACFF";
        setColor("#7BACFF");
        setSecondColor("#26373A");
      } else if (pokemonType == "normal") {
        bg.current.style.background =
          "linear-gradient(180deg, #BAA46A 0.52%, #988B6A 45.92%, #493E20 100%)";
        adviceColor.current.style.color = "#F6E6BD";
        cPower.current.style.backgroundColor = "#F6E6BD";
        cPp.current.style.backgroundColor = "#F6E6BD";
        setSecondColor("#4F4426");
        setColor("#F6E6BD");
      } else if (pokemonType == "ghost") {
        bg.current.style.background =
          "linear-gradient(181.09deg, #501B51 2.02%, #392733 104.92%)";
        adviceColor.current.style.color = "#885C77";
        cPower.current.style.backgroundColor = "#885C77";
        cPp.current.style.backgroundColor = "#885C77";
        setColor("#885C77");
        setSecondColor("#3D2630");
      } else if (pokemonType == "bug") {
        bg.current.style.background =
          "linear-gradient(181.09deg, #88D16F 2.02%, #1E5E34 104.92%)";
        adviceColor.current.style.color = "#D1FF87";
        cPower.current.style.backgroundColor = "#D1FF87";
        cPp.current.style.backgroundColor = "#D1FF87";
        setColor("#D1FF87");
        setSecondColor("#2C6D3C");
      } else if (pokemonType == "poison") {
        bg.current.style.background =
          "linear-gradient(181.09deg, #29234D 2.02%, #0A0621 104.92%)";
        adviceColor.current.style.color = "#BBA4FF";
        cPower.current.style.backgroundColor = "#BBA4FF";
        cPp.current.style.backgroundColor = "#BBA4FF";
        setColor("#BBA4FF");
        setSecondColor("#3A3E66");
      } else if (pokemonType == "fairy") {
        bg.current.style.background =
          "linear-gradient(181.09deg, #EDBCB2 2.02%, #C2736E 104.92%)";
        adviceColor.current.style.color = "#4B443F";
        cPower.current.style.backgroundColor = "#4B443F";
        cPp.current.style.backgroundColor = "#4B443F";
        setColor("#4B443F");
        setSecondColor("#C77B75");
      } else if (pokemonType == "fighting") {
        bg.current.style.background =
          "linear-gradient(181.09deg, #607698 2.02%, #323657 104.92%)";
        adviceColor.current.style.color = "#96A9C7";
        cPower.current.style.backgroundColor = "#96A9C7";
        cPp.current.style.backgroundColor = "#96A9C7";
        setColor("#96A9C7");
        setSecondColor("#323657");
      } else if (pokemonType == "ice") {
        bg.current.style.background =
          "linear-gradient(181.09deg, #9FC1DA 2.02%, #5B79A6 104.92%)";
        adviceColor.current.style.color = "#CDE6FF";
        cPower.current.style.backgroundColor = "#CDE6FF";
        cPp.current.style.backgroundColor = "#CDE6FF";
        setColor("#CDE6FF");
        setSecondColor("#6482AC");
      } else if (pokemonType == "steel") {
        bg.current.style.background =
          "linear-gradient(181.09deg, #BAC1C7 2.02%, #6E7886 104.92%)";
        adviceColor.current.style.color = "#211D1D";
        cPower.current.style.backgroundColor = "#211D1D";
        cPp.current.style.backgroundColor = "#211D1D";
        setColor("#211D1D");
        setSecondColor("#6E7886");
      } else if (pokemonType == "dark") {
        bg.current.style.background =
          "linear-gradient(181.09deg, #202224 2.02%, #0A0D12 104.92%)";
        adviceColor.current.style.color = "#535353";
        cPower.current.style.backgroundColor = "#535353";
        cPp.current.style.backgroundColor = "#535353";
        setColor("#535353");
        setSecondColor("#0A0D12");
      }

      setLoader(true);
      setDuration(true);
    } catch (error) {
      console.log(error);
    }
  }
  async function getPokemonOther(arg) {
    try {
      //error
      setDuration(false);
      let resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${arg}`);
      let jsonp = await resp.json();
      let imagePokemon = jsonp.sprites;
      /* get one */
      let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${arg}`);
      let json = await res.json();
      /* get two */
      let otherRes = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${arg}/`
      );
      let jsonOther = await otherRes.json();
      /* get three */
      let twoRes = await fetch("https://api.adviceslip.com/advice");
      let jsonTwo = await twoRes.json();
      /* get four */
      let fourRes = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${arg}/encounters`
      );
      let jsonFour = await fourRes.json();
      /*get five */
      let fiveRes = await fetch(`https://pokeapi.co/api/v2/move/${arg}`);
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

      /* pokemon images*/
      let pokemonMale = imagePokemon.front_default;
      let pokemonMaleBack = imagePokemon.back_default;
      let pokemonFemale = imagePokemon.front_female;
      let pokemonFemaleBack = imagePokemon.back_female;
      let pokemonShiny = imagePokemon.front_shiny;
      let pokemonShinyBack = imagePokemon.back_shiny;
      let pShinyFemale = imagePokemon.front_shiny_female;
      let pShinyFemaleBack = imagePokemon.back_shiny_female;
      setPokemonMale(pokemonMale);
      setPokemonMakeBack(pokemonMaleBack);
      setPokemonFemale(pokemonFemale);
      setPokemonFemaleBack(pokemonFemaleBack);
      setPokemonShiny(pokemonShiny);
      setPokemonShinyBack(pokemonShinyBack);
      setPShinyFemale(pShinyFemale);
      setPShinyFemaleBack(pShinyFemaleBack);

      if (pokemonType == "water") {
        bg.current.style.background =
          "linear-gradient(181.09deg, #1B3051 2.02%, #272939 104.92%)";
        adviceColor.current.style.color = "#89D3FC";
        cPower.current.style.backgroundColor = "#89D3FC";
        cPp.current.style.backgroundColor = "#89D3FC";
        setColor("#89D3FC");
        setSecondColor("#262A3C");
      } else if (pokemonType == "fire") {
        bg.current.style.background =
          "linear-gradient(181.09deg, #512B1B 2.02%, #392727 104.92%)";
        adviceColor.current.style.color = "#EE8329";
        cPower.current.style.backgroundColor = "#EE8329";
        cPp.current.style.backgroundColor = "#EE8329";
        setColor("#EE8329");
        setSecondColor("#3C2826");
      } else if (pokemonType == "grass") {
        bg.current.style.background =
          "linear-gradient(181.09deg, #1B5120 2.02%, #27392E 104.92%)";
        adviceColor.current.style.color = "#209483";
        cPower.current.style.backgroundColor = "#209483";
        cPp.current.style.backgroundColor = "#209483";
        setColor("#209483");
        setSecondColor("#263D2C");
      } else if (pokemonType == "electric") {
        bg.current.style.background =
          "linear-gradient(181.09deg, #514B1B 2.02%, #393927 104.92%)";
        adviceColor.current.style.color = "#F6E652";
        cPower.current.style.backgroundColor = "#F6E652";
        cPp.current.style.backgroundColor = "#F6E652";
        setColor("#F6E652");
        setSecondColor("#3D3C26");
      } else if (pokemonType == "ground") {
        bg.current.style.background =
          "linear-gradient(181.09deg, #51351B 2.02%, #393027 104.92%)";
        adviceColor.current.style.color = "#C59C4A";
        cPower.current.style.backgroundColor = "#C59C4A";
        cPp.current.style.backgroundColor = "#C59C4A";
        setColor("#C59C4A");
        setSecondColor("#3D3126");
      } else if (pokemonType == "psychic") {
        bg.current.style.background =
          "linear-gradient(181.09deg, #1F1B51 2.02%, #2B2739 104.92%)";
        adviceColor.current.style.color = "#B44AEE";
        cPower.current.style.backgroundColor = "#B44AEE";
        cPp.current.style.backgroundColor = "#B44AEE";
        setColor("#B44AEE");
        setSecondColor("#2A263C");
      } else if (pokemonType == "rock") {
        bg.current.style.background =
          "linear-gradient(181.09deg, #676767 2.02%, #474545 104.92%)";
        adviceColor.current.style.color = "#B4B49C";
        cPower.current.style.backgroundColor = "#B4B49C";
        cPp.current.style.backgroundColor = "#B4B49C";
        setColor("#B4B49C");
        setSecondColor("#202020");
      } else if (pokemonType == "dragon") {
        bg.current.style.background =
          "linear-gradient(181.09deg, #1B2351 2.02%, #273539 104.92%)";
        adviceColor.current.style.color = "#7BACFF";
        cPower.current.style.backgroundColor = "#7BACFF";
        cPp.current.style.backgroundColor = "#7BACFF";
        setColor("#7BACFF");
        setSecondColor("#26373A");
      } else if (pokemonType == "normal") {
        bg.current.style.background =
          "linear-gradient(180deg, #BAA46A 0.52%, #988B6A 45.92%, #493E20 100%)";
        adviceColor.current.style.color = "#F6E6BD";
        cPower.current.style.backgroundColor = "#F6E6BD";
        cPp.current.style.backgroundColor = "#F6E6BD";
        setSecondColor("#4F4426");
        setColor("#F6E6BD");
      } else if (pokemonType == "ghost") {
        bg.current.style.background =
          "linear-gradient(181.09deg, #501B51 2.02%, #392733 104.92%)";
        adviceColor.current.style.color = "#885C77";
        cPower.current.style.backgroundColor = "#885C77";
        cPp.current.style.backgroundColor = "#885C77";
        setColor("#885C77");
        setSecondColor("#3D2630");
      } else if (pokemonType == "bug") {
        bg.current.style.background =
          "linear-gradient(181.09deg, #88D16F 2.02%, #1E5E34 104.92%)";
        adviceColor.current.style.color = "#D1FF87";
        cPower.current.style.backgroundColor = "#D1FF87";
        cPp.current.style.backgroundColor = "#D1FF87";
        setColor("#D1FF87");
        setSecondColor("#2C6D3C");
      } else if (pokemonType == "poison") {
        bg.current.style.background =
          "linear-gradient(181.09deg, #29234D 2.02%, #0A0621 104.92%)";
        adviceColor.current.style.color = "#BBA4FF";
        cPower.current.style.backgroundColor = "#BBA4FF";
        cPp.current.style.backgroundColor = "#BBA4FF";
        setColor("#BBA4FF");
        setSecondColor("#3A3E66");
      } else if (pokemonType == "fairy") {
        bg.current.style.background =
          "linear-gradient(181.09deg, #EDBCB2 2.02%, #C2736E 104.92%)";
        adviceColor.current.style.color = "#4B443F";
        cPower.current.style.backgroundColor = "#4B443F";
        cPp.current.style.backgroundColor = "#4B443F";
        setColor("#4B443F");
        setSecondColor("#C77B75");
      } else if (pokemonType == "fighting") {
        bg.current.style.background =
          "linear-gradient(181.09deg, #607698 2.02%, #323657 104.92%)";
        adviceColor.current.style.color = "#96A9C7";
        cPower.current.style.backgroundColor = "#96A9C7";
        cPp.current.style.backgroundColor = "#96A9C7";
        setColor("#96A9C7");
        setSecondColor("#323657");
      } else if (pokemonType == "ice") {
        bg.current.style.background =
          "linear-gradient(181.09deg, #9FC1DA 2.02%, #5B79A6 104.92%)";
        adviceColor.current.style.color = "#CDE6FF";
        cPower.current.style.backgroundColor = "#CDE6FF";
        cPp.current.style.backgroundColor = "#CDE6FF";
        setColor("#CDE6FF");
        setSecondColor("#6482AC");
      } else if (pokemonType == "steel") {
        bg.current.style.background =
          "linear-gradient(181.09deg, #BAC1C7 2.02%, #6E7886 104.92%)";
        adviceColor.current.style.color = "#211D1D";
        cPower.current.style.backgroundColor = "#211D1D";
        cPp.current.style.backgroundColor = "#211D1D";
        setColor("#211D1D");
        setSecondColor("#6E7886");
      } else if (pokemonType == "dark") {
        bg.current.style.background =
          "linear-gradient(181.09deg, #202224 2.02%, #0A0D12 104.92%)";
        adviceColor.current.style.color = "#535353";
        cPower.current.style.backgroundColor = "#535353";
        cPp.current.style.backgroundColor = "#535353";
        setColor("#535353");
        setSecondColor("#0A0D12");
      }

      setLoader(true);
      setDuration(true);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPokemon();
  }, []);
  if (getdata) {
    getPokemonOther(searchPokemon);
    // setGetdata(false);
  }

  const handleClick = (e) => {
    let $selec = document.querySelector(".selector");
    let broSelec = $selec.nextElementSibling;
    console.log(broSelec.tagName);
    if (broSelec.tagName != "BUTTON") {
      $selec.style.display = "none";
      broSelec.style.display = "block";
      $selec.classList.remove("selector");
      broSelec.classList.add("selector");
    } else {
      console.log("Holamundo");
    }
  };
  const handleClickBack = () => {
    let $selec = document.querySelector(".selector");
    let broSelec = $selec.previousElementSibling;
    console.log(broSelec.tagName);
    if (broSelec.tagName != "BUTTON") {
      $selec.style.display = "none";
      broSelec.style.display = "block";
      $selec.classList.remove("selector");
      broSelec.classList.add("selector");
    } else {
      console.log("Holamundo");
    }
  };
  const handleBackPokemon = (e) => {
    e.preventDefault();
    setSearch(search - 1);
    getPokemon();
  };
  const handleNextPokemon = (e) => {
    e.preventDefault();
    setSearch(search + 1);
    getPokemon();
  };

  return (
    <>
      <div className="content-grid" ref={bg}></div>
      <div className="main">
        <div className="nav-pokemon">
          <div className="back-pokemon" onClick={handleBackPokemon}>
            <svg
              width="5"
              height="9"
              viewBox="0 0 5 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 0.594151L5 8.22257C5 8.75078 4.36135 9.01531 3.98785 8.64181L0.173646 4.8276C-0.0578823 4.59607 -0.0578823 4.22064 0.173646 3.98912L3.98785 0.174908C4.36135 -0.198621 5 0.0659323 5 0.594151Z"
                fill="white"
              />
            </svg>

            <a href="">back</a>
          </div>
          <div className="next-pokemon" onClick={handleNextPokemon}>
            <a href="">next</a>
            <svg
              width="5"
              height="9"
              viewBox="0 0 5 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 8.2225V0.594085C0 0.0658668 0.638646 -0.198657 1.01215 0.174843L4.82635 3.98905C5.05788 4.22058 5.05788 4.59601 4.82635 4.82753L1.01215 8.64174C0.638646 9.01527 0 8.75072 0 8.2225Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div className="show-pokemon">
          <button onClick={handleClickBack}>
            <svg
              width="22"
              height="17"
              viewBox="0 0 30 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.9812 10.4773L25.217 0.516357C25.9245 -0.172119 27.0685 -0.172119 27.7684 0.516357L29.4694 2.17163C30.1769 2.86011 30.1769 3.97339 29.4694 4.65454L22.214 11.7151L29.4694 18.7756C30.1769 19.4641 30.1769 20.5774 29.4694 21.2585L27.776 22.9285C27.0685 23.6169 25.9245 23.6169 25.2245 22.9285L14.9887 12.9675C14.2737 12.2791 14.2737 11.1658 14.9812 10.4773ZM0.530607 12.9675L10.7664 22.9285C11.4739 23.6169 12.6179 23.6169 13.3179 22.9285L15.0188 21.2732C15.7263 20.5847 15.7263 19.4714 15.0188 18.7903L7.76342 11.7297L15.0188 4.66919C15.7263 3.98071 15.7263 2.86743 15.0188 2.18628L13.3179 0.531008C12.6104 -0.157469 11.4664 -0.157469 10.7664 0.531008L0.530607 10.4919C-0.17687 11.1658 -0.17687 12.2791 0.530607 12.9675Z"
                fill="white"
                fill-opacity="0.46"
              />
            </svg>
          </button>
          {loader && (
            <>
              {pokemonMale && (
                <img
                  src={pokemonMale}
                  style={{ display: "block" }}
                  alt=""
                  className="selector"
                />
              )}
              {pokemonMakeBack && (
                <img
                  src={pokemonMakeBack}
                  style={{ display: "none" }}
                  alt=""
                  className=""
                />
              )}
              {pokemonFemale && (
                <img
                  src={pokemonFemale}
                  style={{ display: "none" }}
                  alt=""
                  className=""
                />
              )}
              {pokemonFemaleBack && (
                <img
                  src={pokemonFemaleBack}
                  style={{ display: "none" }}
                  alt=""
                  className=""
                />
              )}
              {pokemonShiny && (
                <img
                  src={pokemonShiny}
                  style={{ display: "none" }}
                  alt=""
                  className=""
                />
              )}
              {pokemonShinyBack && (
                <img
                  src={pokemonShinyBack}
                  style={{ display: "none" }}
                  alt=""
                  className=""
                />
              )}
              {pShinyFemale && (
                <img src={pShinyFemale} style={{ display: "none" }} alt="" />
              )}
              {pShinyFemaleBack && (
                <img
                  src={pShinyFemaleBack}
                  style={{ display: "none" }}
                  alt=""
                  className=""
                />
              )}
            </>
          )}
          <button onClick={handleClick}>
            <svg
              width="22"
              height="17"
              viewBox="0 0 22 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.0138 9.40284L3.50753 16.6256C2.98871 17.1248 2.14977 17.1248 1.63648 16.6256L0.389112 15.4253C-0.129704 14.9261 -0.129704 14.1189 0.389112 13.625L5.70973 8.50531L0.389112 3.38566C-0.129704 2.88644 -0.129704 2.07919 0.389112 1.58529L1.63096 0.374414C2.14977 -0.124805 2.98871 -0.124805 3.50201 0.374414L11.0083 7.59716C11.5326 8.09638 11.5326 8.90362 11.0138 9.40284ZM21.6109 7.59716L14.1046 0.374414C13.5858 -0.124805 12.7469 -0.124805 12.2336 0.374414L10.9862 1.57466C10.4674 2.07388 10.4674 2.88113 10.9862 3.37504L16.3068 8.49469L10.9862 13.6143C10.4674 14.1136 10.4674 14.9208 10.9862 15.4147L12.2336 16.615C12.7524 17.1142 13.5913 17.1142 14.1046 16.615L21.6109 9.39222C22.1297 8.90362 22.1297 8.09638 21.6109 7.59716Z"
                fill="white"
                fill-opacity="0.46"
              />
            </svg>
          </button>
        </div>

        <div className="status-pokemon">
          {loader && <h1 className="name-pokemon">{name}</h1>}
          {loader && <p className="description-pokemon"> {descrip}</p>}

          <span className="phrse-pokemon" ref={adviceColor}>
            {advice}
          </span>

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
                <div className="completed-power" ref={cPower}></div>
              </div>
              <div className="status-pp">
                <div className="completed-pp" ref={cPp}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {!duration && <Loader />}
    </>
  );
}

export default Main;
