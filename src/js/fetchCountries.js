const BASE_URL = 'https://restcountries.com/v3.1';

export const fetchCountries = value =>
  fetch(
    `${BASE_URL}/name/${value}?fields=name,capital,population,flags,languages`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .catch(error => {
      console.warn(error);
      return null;
    });
