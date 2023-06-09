import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { WeatherModule } from "./weather/weather.module";

import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, WeatherModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
