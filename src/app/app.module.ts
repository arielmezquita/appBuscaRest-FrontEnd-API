import { routing, appRoutingProviders } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { DetallesComponent } from './detalles/detalles.component';
import { LocationComponent } from './location/location.component';
import { ContactComponent } from './contact/contact.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorpageComponent,
    DetallesComponent,
    LocationComponent,
    ContactComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [appRoutingProviders, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
