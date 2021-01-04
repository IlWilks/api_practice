export const normalizeData = (dataFromAPI) => {
  let pokeDataObj = dataFromAPI.reduce((accum, data) => {
    console.log(accum);
    const { form, pokemon_id, pokemon_name, type, } = data;
    if (accum[pokemon_id] == null) {
      if (accum[form] == 'Normal') {
      accum[pokemon_id] = { pokemon_id, pokemon_name, type};
      }
    }
    return accum;
  }, {});

  let provinceDataArray = [];

  for (const key in provinceDataObj) {
    provinceDataArray.push(provinceDataObj[key]);
  }
  return provinceDataArray;
};
