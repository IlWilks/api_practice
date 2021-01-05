export const normalizeData = (dataFromAPI, pokechoice) => {
  let choice = pokechoice.name;
  console.log(dataFromAPI)

  let newData = [];
  dataFromAPI.forEach(p => {
    if (p.pokemon_name === choice) {
      console.log(p.form)
      if (p.form === "Normal") {
        newData.push(p.pokemon_name)
        newData.push(p.base_attack)
        newData.push(p.base_defense)
        newData.push(p.base_stamina)
      }
    }
  })
  console.log(newData)
  return (newData)
};
