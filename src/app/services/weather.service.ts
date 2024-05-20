import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Weather } from '../models/weather.model';
import { WeatherForecast } from '../models/forecast.model';

const key = 'ffe5916ff0047a458182df5e1d3bca82';
const url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&';
const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?units=metric&';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(name: string): Observable<Weather> {
    return this.http.get(url + 'q=' + name + '&appid=' + key).pipe(map((data: any) => new Weather(data)));
  }

  getForecast(name: string): Observable<WeatherForecast>{
    return this.http.get(urlForecast + 'q=' + name + '&appid=' + key).pipe(map((data: any) => new WeatherForecast(data)));
  }
}
