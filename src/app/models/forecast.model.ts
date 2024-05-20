import { WeatherB } from "./weather.model"

export class WeatherForecast {
   list: List[];
   city: City;

   constructor(obj?:any) {
      this.list = obj && obj.list.map((data:any)=> new List(data)) || [];
      this.city = obj && obj.city || new City();

   }
}

export class List {
   dt: number;
   main: Main;
   weather: WeatherF[];
   

   constructor(obj?:any) {
      this.dt = obj && obj.dt || null;
      this.main = obj && obj.main || new Main();
      this.weather = obj && obj.weather.map((data: any) => new WeatherF(data)) || [];
   }
}

export class City {
   id: number;
   name: string;
   country: string;

   constructor(obj?: any) {
      this.id = obj && obj.id || null;
      this.name = obj && obj.name || '';
      this.country = obj && obj.country || '';
   }
}

export class WeatherF {
   id: number;
   main: string;
   description: string;
   icon: string;

   constructor(obj?:any) {
      this.id = obj && obj.id || null;
      this.main = obj && obj.main || '';
      this.description = obj && obj.description || '';
      this.icon = obj && obj.icon || '';
   }
}

export class Main {
   temp: number;
   feels_like: number;
   temp_min: number;
   temp_max: number;
   pressure: number;
   humidity: number;

   constructor(obj?: any) {
      this.temp = obj && obj.temp || null;
      this.feels_like = obj && obj.feels_like || null;
      this.temp_min = obj && obj.temp_min || null;
      this.temp_max = obj && obj.temp_max || null;
      this.pressure = obj && obj.pressure || null;
      this.humidity = obj && obj.humidity || null;
   }
}