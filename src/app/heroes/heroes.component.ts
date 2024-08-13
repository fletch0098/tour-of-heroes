import { Component } from '@angular/core';
import { UpperCasePipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { Hero } from '../Interfaces/hero.interface';
import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service';

import{HeroDetailComponent} from '../hero-detail/hero-detail.component'

@Component({
  standalone: true,
  selector: 'app-heroes',
  imports: [UpperCasePipe, FormsModule, NgFor, NgIf, RouterLink, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  
  // Heroes List
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

}