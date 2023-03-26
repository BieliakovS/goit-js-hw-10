import './css/styles.css';
import fetchCountries from './js/fetchCountries';
import CountryList from './templates/countryList.hbs';
import CountryCard from './templates/countryCard.hbs';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const refs = {
  searchBox: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

function onInput(e) {
  e.preventDefault();
  const inputValue = refs.searchBox.value.trim();

  // fetchCountries(inputValue).then(country => {
  //   countryList.innerHTML = CountryList(country);
  // });

  // if (inputValue === '') {
  //     console.log('Enter country name');
  // } if (fetchCountries(inputValue).length <= 10) {
  //     console.log('list')
  // }
  // fetchCountries(inputValue).then(country => {
  //     countryList.innerHTML = CountryList(country);
  // });
}

refs.searchBox.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));
