import { Component, OnInit } from '@angular/core';
import { HeroDetailComponent } from './hero-detail.component';
import { Hero } from './models/hero';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives:[HeroDetailComponent],
  providers:[HeroService]
})
export class AppComponent implements OnInit{
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
