import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { FaSearch } from 'react-icons/fa';
import css from './Searchbar.module.css';


export default function Searchbar({onSubmit}) {

  const [name, setName] = useState('');

  const onChangeInput = e => {
    setName(e.currentTarget.value);
  };

  const onSubmitForm = e => {
    e.preventDefault();
    if (name.trim() === '') {
      return toast.info('Please enter a search term.');

    }
    onSubmit(name);
  };

    return (
      <header className={css.Searchbar}>
      <p className={css.Head}>🐊👑  𝕝𝕠𝑜ᵏ 𝐚𝔱 уⓄǗℝ 𝕗𝔞ⓥ𝔬ʳｉт𝒆 ℃ＯℂкＴᵃ𝒾𝓁  👤🐝</p>
        <form className={css.SearchForm} onSubmit={onSubmitForm}>
          <input className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search for cocktails"
            value={name}
            onChange={onChangeInput}
          />
        <button className={css.SearchFormButton} type="submit">
        <FaSearch size={15} />
        </button>
        </form>
      </header>
    );
  }



Searchbar.propTypes = { 
  onSubmit: PropTypes.func.isRequired,
};
