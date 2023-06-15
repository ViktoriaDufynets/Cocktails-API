import axios from 'axios';

// export const imagesApi = async (name) => {
//   const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
//   const data = await response.json()
//   .then(data => console.log(data));
//   return data.drinks;
// }

  
// const getDrinkByName = async (name) => {
//   const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
//   const data = await response.json();
//   return data.drinks;
// }

// getDrinkByName('margarita')
//   .then(data => console.log(data));


// export async function imagesApi({ fact }) {
//   try {
//     const response = await axios.get('', {
//       params: {
//         fact: fact,
//       },
//     });
//     return response;
//     console.log(response);
//   } catch (error) {
//   }
// }