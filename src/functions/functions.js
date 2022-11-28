const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://store-apps.p.rapidapi.com/app-details',
  params: {
    app_id: 'com.google.android.apps.subscriptions.red',
    region: 'us',
    language: 'en'
  },
  headers: {
    'X-RapidAPI-Key': 'a117c7eba3msh0894b813e4fecc1p1c17c9jsn3b47afb0d4d5',
    'X-RapidAPI-Host': 'store-apps.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});