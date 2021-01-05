import axios from "axios";
import { useEffect, useState } from "react";
import { normalizeData } from "./format";

const options = {
  method: 'GET',
  url: 'https://pokemon-go1.p.rapidapi.com/pokemon_stats.json',
  headers: {
    'x-rapidapi-key': '26c1c1b532msha12ca5e2d508444p13f5e6jsn9f5cd6132607',
    'x-rapidapi-host': 'pokemon-go1.p.rapidapi.com'
  }
};

const PokeChart = (name) => {
  const [choice, setChoice] = useState([])
  useEffect(()=> {
    getMons();
}, [])

const getMons = async () => {
  await axios
  .request(options)
  .then(function (response) {
    let x = normalizeData(response.data, name);
    setChoice(x);
  })
  .catch(function (error) {
    console.error(error);
  });
};


return (
  <>
    <div>Pokemon</div>
    <p1>Name: {choice[0]}</p1>
    <br/>
    <p1>Attack: {choice[1]}</p1>
    <br/>
    <p1>Defense: {choice[2]}</p1>
    <br/>
    <p1>Stamina: {choice[3]}</p1>
  </>
)
}

export default PokeChart