import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router'
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [AppComponent, HeroesComponent, HeroDetailComponent, DashboardComponent],
  imports: [BrowserModule, FormsModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
      {path: 'heroes',component: HeroesComponent},
      {path: 'dashboard',component: DashboardComponent},
      {path: 'detail/:id',component: HeroDetailComponent}                             
])
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
