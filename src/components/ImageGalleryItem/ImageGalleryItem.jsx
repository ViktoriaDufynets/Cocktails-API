import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';




const Image = ({ description, smallImage, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5,  strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strInstructions, Shake, Drink  }) => {
  return (
  <>
  <li className={css.ImageGalleryItem}>
  <div className={css.Block}>
  <img className={css.ImageGalleryItemImage} src={smallImage} />
  <div className={css.Desc}>
  <p className={css.Header}><b>{description}</b></p>
    
    <div>
    <div><b>How to prepare:</b> <p>{strInstructions}</p></div>
    <div><b>Ingredients:</b>
      <p>{strIngredient1}: <span>{strMeasure1}</span></p>
      <p>{strIngredient2}: <span>{strMeasure2}</span></p>
      <p>{strIngredient3}: <span>{strMeasure3}</span></p>
      <p>{strIngredient4}: <span>{strMeasure4}</span></p>
      <p>{strIngredient5}: <span>{strMeasure5}</span></p>
      </div> 
      <div className={css.ButtonBlock}>
        <button  className={css.Button} onClick={Shake}>Shake me</button>
        <button  className={css.Button} onClick={Drink}>Drink me</button>
      </div>  
    </div>
    </div>
    </div>
  </li>
  </> 
)}


export default Image;