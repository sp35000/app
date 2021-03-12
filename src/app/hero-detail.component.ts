// Pode manter o import do Input por enquanto... você removerá ele futuramente:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';

import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html'
  })
  export class HeroDetailComponent implements OnInit {

    constructor(
      private heroService: HeroService,
      private route: ActivatedRoute,
      private location: Location
    ) {}

    @Input() hero: Hero;

    ngOnInit(): void {
      this.route.paramMap
        .pipe(
          switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
        )
        .subscribe(hero => this.hero = hero);   }

   goBack(): void {
     this.location.back();
   }

   save(): void {
     this.heroService.update(this.hero)
     .then(() => this.goBack());
  }

}
