import { Component, OnInit } from '@angular/core';
import { HeroDetailComponent } from './hero-detail.component';
import { Hero } from './models/hero';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-hero',
  templateUrl: 'hero.component.html',
  styleUrls: ['hero.component.css'],
  directives:[HeroDetailComponent]
})
export class HeroesComponent implements OnInit{
  public heroes : Hero[];

  constructor(private heroService:HeroService){

  }

  title = 'app works!';

  selectedHero:Hero;

  ngOnInit():void {
    this.getHeroes();
  }

  getHeroes():void{
    this.heroService.getHeroes()
      .then(response => this.heroes = response);
  }

  onSelect(hero:Hero):void{
    this.selectedHero = hero;
  }
}
