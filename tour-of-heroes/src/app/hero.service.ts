import { MessageService } from './message.service';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(heroId: number): Observable<Hero | undefined> {
    const hero = HEROES.find((hero) => hero.id === heroId);
    this.messageService.add(`HeroService: fetched hero id=${heroId}`);
    return of(hero);
  }
}
