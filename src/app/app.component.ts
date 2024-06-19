import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherSearchComponent } from './component/weather-search/weather-search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,WeatherSearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weather-forecast-app';
}
