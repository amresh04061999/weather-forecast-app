import { Component, Input } from '@angular/core';
import { WeatherData } from '../../model/weather.model';

@Component({
  selector: 'app-weather-display',
  standalone: true,
  imports: [],
  templateUrl: './weather-display.component.html',
  styleUrl: './weather-display.component.css',
})
export class WeatherDisplayComponent {
  @Input() weatherDetails: WeatherData;
  constructor() {
    this.weatherDetails = {} as WeatherData;
  }
  getFormattedDate(): string {
    const newDate = new Date();
    const selectOptions: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    };
    return newDate.toLocaleDateString('en-US', selectOptions);
  }
  formatTem(temp: number): string {
    return `${temp.toFixed(0)}°C`;
  }
}
