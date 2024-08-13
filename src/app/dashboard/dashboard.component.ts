import { Component, OnInit } from '@angular/core';
import {NgFor} from '@angular/common';

import { RouterLink } from '@angular/router';

import { Hero } from '../hero.interface';
import { HeroService } from '../services/hero.service';

import { HeroSearchComponent } from '../hero-search/hero-search.component'

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor, RouterLink, HeroSearchComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
