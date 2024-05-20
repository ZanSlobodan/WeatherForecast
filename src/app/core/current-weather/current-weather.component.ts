import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { WeatherForecast } from 'src/app/models/forecast.model';
import { Weather } from 'src/app/models/weather.model';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent {
  weather: Weather = new Weather();
  forecast: WeatherForecast = new WeatherForecast();
  temp: number = 0;
  tempH: number = 0;
  tempL: number = 0;

  name: FormControl = new FormControl('');

  constructor(private service: WeatherService) { }

  getWeather(): void {
    this.service.getWeather(this.name.value).subscribe({
      next: (data: Weather) => {
        this.weather = data
        this.temp = Math.round(this.weather.main.temp)
        this.tempH = Math.round(this.weather.main.temp_max)
        this.tempL = Math.round(this.weather.main.temp_min)
        console.log(data)
      }
    })
  }

  getForecast(): void {
    this.service.getForecast(this.name.value).subscribe({
      next: (data: WeatherForecast) => {
        this.forecast = data
        console.log(data)
      }
    })
  }
}
