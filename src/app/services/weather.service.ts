import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Weather } from '../models/weather.model';

const key = 'ffe5916ff0047a458182df5e1d3bca82';
const url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(name: string): Observable<Weather> {
    return this.http.get(url + 'q=' + name + '&appid=' + key).pipe(map((data: any) => new Weather(data)));
  }

}
