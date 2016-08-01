import { Component, OnInit } from '@angular/core';
import { HeroDetailComponent } from './hero-detail.component';
import { Hero } from './models/hero';
import { HeroService } from './hero.service';
import { WorldBankService } from './services/worldBankHttpService';

@Component({
  moduleId: module.id,
  selector: 'my-hero',
  templateUrl: 'hero.component.html',
  styleUrls: ['hero.component.css'],
  directives:[HeroDetailComponent]
})
export class HeroesComponent implements OnInit{
  public heroes : Hero[];
  public wbData: any[];
  public errorMessage: any;

  constructor(private heroService:HeroService, 
  private worldBankService: WorldBankService){

  }

  title = 'app works!';

  selectedHero:Hero;

  ngOnInit():void {
    this.getHeroes();
    this.getWorldBankData();
  }

  getHeroes():void{
    this.heroService.getHeroes()
      .then(response => this.heroes = response);
  }

  getWorldBankData(){
    this.worldBankService.getTestData()
    .subscribe(data=> this.wbData = data, 
    error => this.errorMessage = <any>error);
  }

  onSelect(hero:Hero):void{
    this.selectedHero = hero;
  }
}
