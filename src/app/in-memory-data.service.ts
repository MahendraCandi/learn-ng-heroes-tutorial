import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './heroes';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() { }

  createDb() {
    const heroes = [
      { id: 1, name: "Saitama", ulti: "Serious Punch" },
      { id: 2, name: "Genos", ulti: "Incineration Cannon" },
      { id: 3, name: "Mumen Rider", ulti: "Justice Crash" },
      { id: 4, name: "Fubuki", ulti: "Hell Storm" },
      { id: 5, name: "Death Gatling", ulti: "Death Shower" },
      { id: 6, name: "Watchdog Man", ulti: "Hand-to-Hand Combat" },
      { id: 7, name: "King", ulti: "King Style" },
      { id: 8, name: "Tatsumaki", ulti: "Psychic Combat" },
      { id: 9, name: "Bang", ulti: "Water Stream Rock Smashing Fist" },
      { id: 10, name: "Mizuki", ulti: "Pole Vault" }
    ]
    // console.log({heroes});
    // console.log(this.genId(heroes));
    return {heroes};
  }

  genId(heroes: Hero[]): number  {
    // console.log(...heroes.map(h => h.name));
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  }
}
