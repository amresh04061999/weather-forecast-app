import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { WeatherApiService } from '../../services/weather-api.service';
import { WeatherDisplayComponent } from '../weather-display/weather-display.component';
import { WeatherData } from '../../model/weather.model';

@Component({
  selector: 'app-weather-search',
  standalone: true,
  imports: [WeatherDisplayComponent, ReactiveFormsModule],
  templateUrl: './weather-search.component.html',
  styleUrl: './weather-search.component.css',
})
export class WeatherSearchComponent implements OnInit {
  public searchForm: FormGroup;
  public weatherDetails: any;
  public errorMessage: any;
  public isSubmit: boolean;
  constructor(
    private _weatherService: WeatherApiService,
    private _fb: FormBuilder
  ) {
    this.errorMessage = null;
    this.isSubmit = false;
    this.searchForm = this._fb.group({
      city: ['', Validators.required],
    });
  }
  ngOnInit(): void {}
  searchWeather(): void {
    this.isSubmit = true;
    if (this.searchForm.valid) {
      const city = this.searchForm.get('city')?.value;
      if (city) {
        this._weatherService.getWeatherDetails(city).subscribe({
          next: (data: WeatherData) => {
            this.weatherDetails = data;
            this.searchForm.reset();
            this.isSubmit = false;
            this.errorMessage = null;
          },
          error: (error) => {
            this.errorMessage = error;
            this.weatherDetails = null;
          },
        });
      }
    }
  }
}
