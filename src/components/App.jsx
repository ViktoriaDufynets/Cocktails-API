import { useState, useEffect } from 'react';
//import { imagesApi } from './serviceApi';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';


export const App = () => {

  const [name, setName] = useState('');
  const [drinks, setDrinks] = useState([]);
//  const [showModal, setShowModal] = useState(false);



  useEffect(() => {
    if (name === '') {
      return;
    }

    const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;
      fetch(URL).then(res => res.json()).then(({ drinks }) => {
        const drinksArray = drinks.map(drink => ({
          id: drink.idDrink,
          description: drink.strDrink,
          smallImage: drink.strDrinkThumb,
          strIngredient1: drink.strIngredient1,
          strIngredient2: drink.strIngredient2,
          strIngredient3: drink.strIngredient3,
          strIngredient4: drink.strIngredient4,
          strIngredient5: drink.strIngredient5,
          strMeasure1: drink.strMeasure1,
          strMeasure2: drink.strMeasure2,
          strMeasure3: drink.strMeasure3,
          strMeasure4: drink.strMeasure4,
          strMeasure5: drink.strMeasure5,
          strInstructions: drink.strInstructions,
          Shake: Shake,
          Drink: Drink,
        }));
        console.log(drinks);
        setDrinks(drinksArray);

      }).catch().finally();

  }, [name]);

  const getSearchRequest = name => {
    setName(name);

  };

  function Shake() {
console.log('shake')
    }

    function Drink() {
      console.log('drink')
          }

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };


  return (
    <>
<Searchbar onSubmit={getSearchRequest}/>
<ImageGallery drinks={drinks} Shake={Shake}/>
{Drink() && <Modal onClose={toggleModal}/>}
    </>

  );
  }


