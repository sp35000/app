import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable, Subject, of }  from 'rxjs';

// Observable operators
import { catchError, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.css' ]
})

export class HeroSearchComponent implements OnInit {

  heroes: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private heroService: HeroService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes = this.searchTerms
      .pipe(
        debounceTime(300),        // wait 300ms after each keystroke before considering the term
        distinctUntilChanged(),   // ignore if next search term is same as previous
        switchMap(term => term   // switch to new observable each time the term changes
          // return the http search observable
          ? this.heroService.search(term)
          // or the observable of empty heroes if there was no search term
          : of<Hero[]>([])),
        catchError(error => {
          // TODO: add real error handling
          console.log(error);
          return of<Hero[]>([]);
        })
      );
  }

  gotoDetail(hero: Hero): void {
    const link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
