import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Dr Nice', points: '100' },
      { id: 2, name: 'Narco', points: '200' },
      { id: 3, name: 'Bombasto', points: '300' },
      { id: 4, name: 'Celeritas', points: '400' },
      { id: 5, name: 'Magneta', points: '500' },
      { id: 6, name: 'RubberMan', points: '600' },
      { id: 7, name: 'Dynama', points: '700' },
      { id: 8, name: 'Dr IQ', points: '800' },
      { id: 11, name: 'Magma', points: '1100' },
      { id: 10, name: 'Tornado', points: '1000' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  }
}