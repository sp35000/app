import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router'
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, HeroesComponent, HeroDetailComponent, DashboardComponent],
  imports: [BrowserModule, FormsModule,AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
