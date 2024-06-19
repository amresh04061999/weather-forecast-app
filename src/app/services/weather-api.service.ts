import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';
import { WeatherData } from '../model/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {
  private apiUrl = environment.apiUrl;
  private apiKey = environment.apiKey;
  constructor(private http: HttpClient) {}
  // get  weather using get in  http mathod
  getWeatherDetails(city: string): Observable<WeatherData> {
    const zipCode = Number(city);
    const url = Number.isNaN(zipCode) ? `${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric` : `${this.apiUrl}?zip=${city},IN&appid=${this.apiKey}&units=metric`;
    // const url = `${this.apiUrl}?zip=${city},IN&appid=${this.apiKey}&units=metric`;
    return this.http.get<any>(url).pipe(catchError(this.handleError));
  }


  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      switch (error.status) {
        case 404:
          errorMessage = 'City not found. Please check the name and try again.';
          break;
        case 400:
          errorMessage = 'It seems like the input is invalid. Please enter a valid city name.';
          break;
        case 401:
          errorMessage = 'Error 401: Unauthorized';
          break;
        case 500:
          errorMessage = 'Oops! Something went wrong. Please try again later.';
          break;
        default:
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          break;
      }
    }
    return  throwError(()=>errorMessage);
  }
}
