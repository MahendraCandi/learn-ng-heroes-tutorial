import { MessageService } from './../message.service';
import { HeroService } from './../hero.service';
import { Hero } from './../heroes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  // selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  // constructor(private heroService: HeroService, private messageService: MessageService) { }

  

  ngOnInit() {
    this.getHeroes();
  }

  // onSelect(hero:Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroService: Selected hero id=${hero.name}`);
  // }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(h => this.heroes = h);
  }

  add(name: string): void {
    name = name.trim();
    if(!name) return;
    
    let t = {name} as Hero;
    console.log(t)

    this.heroService
      .addHero({name} as Hero)
      .subscribe(hero => {
        this.heroes.push(hero)
      })
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}
