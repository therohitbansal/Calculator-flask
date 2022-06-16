import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycalculatorComponent } from './mycalculator/mycalculator.component';
import {CalcService} from './calc.service';
@NgModule({
  declarations: [
    AppComponent,
    MycalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CalcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
