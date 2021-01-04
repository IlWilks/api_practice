import axios from "axios";
import { useEffect } from "react";

const options = {
  method: 'GET',
  url: 'https://pokemon-go1.p.rapidapi.com/pokemon_stats.json',
  headers: {
    'x-rapidapi-key': '26c1c1b532msha12ca5e2d508444p13f5e6jsn9f5cd6132607',
    'x-rapidapi-host': 'pokemon-go1.p.rapidapi.com'
  }
};

const PokeChart = () => {

  useEffect(()=> {
axios
.request(options)
.then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
}, [])

return (
  <div>Pokemon</div>
)
}

export default PokeChart