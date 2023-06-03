import { Component, OnInit } from "@angular/core";
import { WeatherService } from "./weather/weather.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}
  errorMessage: string = "";
  ngOnInit(): void {
    this.errorMessage = this.weatherService.errorMessage;
  }
  title = "scrumconnect-angular-test";
}
