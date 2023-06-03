import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { WeatherService } from "../../weather.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
})
export class SearchComponent {
  // IMPLEMENT ANY INPUT OR OUTPUT YOU MIGHT NEED
  city: string = "";

  constructor(
    private http: HttpClient,
    private weatherService: WeatherService
  ) {}

  onInput(city: string) {
    this.city = city;
  }

  search(event: any) {
    // TO BE IMPLEMENTED
    event.preventDefault();
    // let data = {
    //   q: this.city,
    //   limit: "1",
    //   APPID: "c51abd04154265e5ab5e517458dc219d",
    // };

    // this.http
    //   .get("http://api.openweathermap.org/geo/1.0/direct", {
    //     params: data,
    //   })
    //   .subscribe((data) => {
    //     this.weatherService.params.lat = data[0].lat;
    //     this.weatherService.params.lon = data[0].lon;
    //   });
    this.weatherService.searchWeatherForCity(this.city);
    this.city = "";
  }
}
