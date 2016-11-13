import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CarPartsComponent } from './car-parts.component';
import { FormsModule } from '@angular/forms';
import { RacingDataService } from './racing-data.service'
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, CarPartsComponent, RacingDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
