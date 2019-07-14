import axios from 'axios';

async function getResults(query) {
  const proxy = 'https://cors-anywhere.herokuapp.com/';
  const key = '9cd62e3f553d43b377db986016afc94d';
  try {
  const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${query}`);
  const recipes = res.data.recipes;
  console.log(recipes);
  } catch(error) {
    alert(error);
  }
}
getResults('tomato pasta');

// https://www.food2fork.com/api/search
// 9cd62e3f553d43b377db986016afc94d
