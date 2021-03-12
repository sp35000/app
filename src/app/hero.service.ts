import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable }     from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private baseUrl = 'http://localhost:3000/api/heroes';  // URL to web api

  constructor(private http: HttpClient) { }

  getHeroes(): Promise<Hero[]> {
    const url = this.baseUrl;
    return this.http.get<Hero[]>(url).toPromise().catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getTopHeroes(): Promise<Hero[]> {
      return this.getHeroes().then(heroes => {
        return heroes.slice(0, 4);
      });
  }

  getHero(id: number): Promise<Hero> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Hero>(url).toPromise().catch(this.handleError);
  }

  create(name: string): Promise<Hero> {
    const url = this.baseUrl;
    const body: Hero = {
      id: undefined,
      name: name
    };
    return this.http.post<Hero>(url, body).toPromise().catch(this.handleError);
  }

  update(hero: Hero): Promise<Hero> {
    const url = `${this.baseUrl}/${hero.id}`;
    const body = hero;
    return this.http.put<Hero>(url, body).toPromise().catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url).toPromise().catch(this.handleError);
  }

  search(term: string): Observable<Hero[]> {
    const url = `${this.baseUrl}/?name_like=${term}`;
    return this.http.get<Hero[]>(url);
  }

}
