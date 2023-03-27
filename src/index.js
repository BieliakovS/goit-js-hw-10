import './css/styles.css';
import debounce from 'lodash.debounce';
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

fetchCountries(inputValue)
.then(value => {
  if (value.length === 0) {
    console.log('Please, enter country name');
    return 'Please, enter country name';
  } if (value.length > 10) {
    console.log('Too many matches found. Please enter a more specific name.');
  } if (value.length >= 2 && value.length <= 10) {
    console.log(refs.countryList);
    refs.countryList.innerHTML = CountryListTemplate(value[0]);
  } if (value.length === 1) {
    console.log(value[0]);
    refs.countryInfo.innerHTML = CountryCardTemplate(value);
  }
})
.catch(error => {
  console.warn(error);
});
}

refs.searchBox.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

