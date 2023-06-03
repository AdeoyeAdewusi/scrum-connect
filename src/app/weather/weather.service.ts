import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class WeatherService {
  url = "https://api.openweathermap.org/data/2.5/forecast";
  params = {
    q: "",
    units: "metric",
    appid: "c51abd04154265e5ab5e517458dc219d",
  };

  dataCol = [];
  errorMessage: string = "";

  constructor(private http: HttpClient) {}

  searchWeatherForCity(city: string) {
    // implement the service
    this.params.q = city;
    this.http.get(this.url, { params: this.params }).subscribe(
      (data) => {
        city = "";
        this.dataCol.push(data);
      },
      (error) => {
        this.errorMessage = error.error.message;
        return;
      }
    );
    console.log(this.errorMessage);
  }

  //   private handleError(error: HttpErrorResponse) {
  //     if (error.status === 0) {
  //       // A client-side or network error occurred. Handle it accordingly.
  //       console.error("An error occurred:", error.error);
  //     } else {
  //       // The backend returned an unsuccessful response code.
  //       // The response body may contain clues as to what went wrong.
  //       console.error(
  //         `Backend returned code ${error.status}, body was: `,
  //         error.error
  //       );
  //     }
  //     // Return an observable with a user-facing error message.
  //     return throwError(
  //       () => new Error("Something bad happened; please try again later.")
  //     );
  //   }
}
