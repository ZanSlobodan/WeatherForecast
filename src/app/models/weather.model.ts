  export class Weather {
    main: Main;
    wind: Wind;
    weather: WeatherB[];
    name: string;
    id: number;

    constructor(obj?: any) {
        this.main = obj && obj.main && new Main(obj.main) || new Main();
        this.wind = obj && obj.wind && new Wind(obj.wind) || new Wind();
        this.weather = obj && obj.weather && obj.weather.map((data: any) => new WeatherB(data)) || [];
        this.name = obj && obj.name || '';
        this.id = obj && obj.id || null;
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

  export class Wind {
    speed: number;
    deg: number;

    constructor(obj?: any) {
        this.speed = obj && obj.speed || null;
        this.deg = obj && obj.deg || null;
    }
  }

  export class WeatherB {
    id: number;
    main: string;
    description: string;
    icon: string;

    constructor(obj?: any) {
        this.id = obj && obj.id || null;
        this.main = obj && obj.main || '';
        this.description = obj && obj.description || '';
        this.icon = obj && obj.icon || '';
    }
  }