import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';

@NgModule({
  declarations: [AppComponent, HeroesComponent, HeroDetailComponent],
  imports: [BrowserModule, FormsModule,
    RouterModule.forRoot([
    {
      path: 'heroes',             
      component: HeroesComponent  
    }                             
  ])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}