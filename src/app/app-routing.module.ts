import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { DetallesComponent } from './detalles/detalles.component';
import { LocationComponent} from './location/location.component';
import { InfoComponent } from './info/info.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'detalles/:id', component: DetallesComponent},
  {path: 'detalles', component: DetallesComponent},
  {path: 'location', component: LocationComponent},
  {path: 'info', component: InfoComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: ErrorpageComponent}
];

export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
