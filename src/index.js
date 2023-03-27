import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { fetchCountries } from './js/fetchCountries';
import CountryListTemplate from './templates/countryList.hbs';
import CountryCardTemplate from './templates/countryCard.hbs';

const DEBOUNCE_DELAY = 300;

const refs = {
  searchBox: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

function onInput(e) {
  e.preventDefault();
  const inputValue = refs.searchBox.value.trim();

  if (inputValue === '') {
    Notiflix.Notify.warning('Please, enter country name');
    refs.countryList.innerHTML = '';
    refs.countryInfo.innerHTML = '';
    return;
  }

  fetchCountries(inputValue)
    .then(value => {
      if (value.length > 10) {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      }
      if (value.length >= 2 && value.length <= 10) {
        console.log(refs.countryList);
        refs.countryList.innerHTML = CountryListTemplate(value[0]);
      }
      if (value.length === 1) {
        console.log(value[0]);
        refs.countryInfo.innerHTML = CountryCardTemplate(value);
      }
    })
    .catch(error => {
      Notiflix.Notify.failure('Oops, there is no country with that name');
    });
}

refs.searchBox.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));
