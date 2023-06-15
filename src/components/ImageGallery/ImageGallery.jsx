import PropTypes from 'prop-types';
import Image from "components/ImageGalleryItem/ImageGalleryItem";
import css from './ImageGallery.module.css';

const ImageGallery = ({ drinks }) => {
    return (
     <ul className={css.ImageGallery}>
     {drinks.map(({ id, description, smallImage, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strInstructions, Shake, Drink }) => (
        <Image
          key={id}
          description={description}
          smallImage={smallImage}
          strIngredient1={strIngredient1}
          strIngredient2={strIngredient2}
          strIngredient3={strIngredient3}
          strIngredient4={strIngredient4}
          strIngredient5={strIngredient5}
          strMeasure1={strMeasure1}
          strMeasure2={strMeasure2}
          strMeasure3={strMeasure3}
          strMeasure4={strMeasure4}
          strMeasure5={strMeasure5}
          strInstructions={strInstructions}
          Shake={Shake}
          Drink={Drink}
        />
      ))}
    </ul>
 
)}

export default ImageGallery;