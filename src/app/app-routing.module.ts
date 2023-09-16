import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { WeatherDataComponent } from './weather-data/weather-data.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'weatherData', component: WeatherDataComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
