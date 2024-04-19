import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Weather } from 'src/app/models/weather.model';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent {
  weather: Weather = new Weather();
  temp: number = 0

  name: FormControl = new FormControl('');

  constructor(private service: WeatherService) { }

  getWeather(): void {
    this.service.getWeather(this.name.value).subscribe({
      next: (data: Weather) => {
        this.weather = data
        this.temp = Math.round(this.weather.main.temp)
        console.log(data)
      }
    })
  }
}
