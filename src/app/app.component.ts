import { Component } from '@angular/core';
import { CityListService } from './services/citylist.service';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cityList;
  selectedCity;
  weatherData;
  weatherIconUrl;
  title = 'weatherwidget';

  constructor(private cityListService: CityListService,private weatherService: WeatherService) {
    
  }

  fetchWeatherData(){
    if(!this.selectedCity) return;

    this.weatherService.getJSON(this.selectedCity.id).subscribe(data => {
      this.weatherData = data;
      this.weatherIconUrl = this.weatherService.getIconUrl(this.weatherData?.weather[0]?.icon);
    });

  }

  ngOnInit() {
    this.cityListService.getJSON().subscribe(data => {
      this.cityList = data;
    }); 
  }
}
