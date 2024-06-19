
export class Coordinates {
    lon: number;
    lat: number;
    constructor(lon:number,lat:number){
       this.lon=lon 
       this.lat=lat 
    }
  }
export class Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
  
    constructor(id: number, main: string, description: string, icon: string) {
      this.id = id;
      this.main = main;
      this.description = description;
      this.icon = icon;
    }
  }
  export class MainWeatherInfo {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  
    constructor(
      temp: number,
      feels_like: number,
      temp_min: number,
      temp_max: number,
      pressure: number,
      humidity: number,
      sea_level: number,
      grnd_level: number
    ) {
      this.temp = temp;
      this.feels_like = feels_like;
      this.temp_min = temp_min;
      this.temp_max = temp_max;
      this.pressure = pressure;
      this.humidity = humidity;
      this.sea_level = sea_level;
      this.grnd_level = grnd_level;
    }
  }
  
  export class Wind {
    speed: number;
    deg: number;
    gust: number;
  
    constructor(speed: number, deg: number, gust: number) {
      this.speed = speed;
      this.deg = deg;
      this.gust = gust;
    }
  }
  export class Clouds {
    all: number;
  
    constructor(all: number) {
      this.all = all;
    }
  }
  export class Sys {
    country: string;
    sunrise: number;
    sunset: number;
  
    constructor(country: string, sunrise: number, sunset: number) {
      this.country = country;
      this.sunrise = sunrise;
      this.sunset = sunset;
    }
  }
  
  export class WeatherData {
      coord: Coordinates;
      weather: Weather[];
      base: string;
      main: MainWeatherInfo;
      visibility: number;
      wind: Wind;
      clouds: Clouds;
      dt: number;
      sys: Sys;
      timezone: number;
      id: number;
      name: string;
      cod: number;
    constructor(coord:Coordinates, weather: Weather[],  base: string,main: MainWeatherInfo, visibility: number,wind: Wind,clouds: Clouds,
        dt: number, sys: Sys,timezone: number,id: number,name: string,cod: number
        
    ){
        this.coord=coord,
        this.weather=weather
        this.base=base
        this.main=main
        this.visibility=visibility
        this.wind=wind
        this.clouds=clouds
        this.dt=dt
        this.sys=sys
        this.timezone=timezone
        this.id=id
        this.name=name
        this.cod=cod

    }
   
  }
  