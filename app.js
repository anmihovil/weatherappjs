// Initialize Weather object
const weather = new Weather('London','UK');

weather.getWeather()
  .then(results => {
    console.log(results); 
  })
  .then(err => console.log(err));