import { Component, OnChanges } from "@angular/core";
import { WeatherService } from "../../weather.service";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
})
export class ResultsComponent implements OnChanges {
  constructor(private weatherService: WeatherService) {}
  tableArray = this.weatherService.dataCol;
  errorMessage = this.weatherService.errorMessage;

  ngOnChanges() {
    // IMPLEMENT ANYTHING YOU BEKIEVE YOU MIGHT NEED HERE
  }

  test(value: string) {
    if (value === "Clear") {
      return "../../../../assets/sun.png";
    } else if (value === "Clouds") {
      return "../../../../assets/cloudy.png";
    } else if (value === "Rain") {
      return "../../../../assets/rain.gif";
    }
  }
}
