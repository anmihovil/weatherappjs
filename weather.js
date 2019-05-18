class Weather {
  cosntructor(city, state){
    this.apiKey = 'aebbb935054ce1b44f5611b061810df6';
    this.city = city;
    this.state = state;
  }

  // Fetch Weather according City/State name
  async getWeather(){
    
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,Uk&appid=aebbb935054ce1b44f5611b061810df6&units=metric`);
    const responseData = await response.json();
    return responseData;
  }

  // Change Weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}