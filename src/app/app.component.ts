/**
 * Created by gary on 6/25/16.
 */
import { Component } from "@angular/core";
import { RouterConfig, ROUTER_DIRECTIVES, provideRouter } from '@angular/router';
import { HeroService } from "./hero.service";
import { HeroesComponent } from './hero.component';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

@Component({
  selector:'app-root',
  templateUrl:'./app/app.component.html',
  directives:[ROUTER_DIRECTIVES, HeroesComponent, MD_BUTTON_DIRECTIVES, MD_CARD_DIRECTIVES],
  providers: [HeroService]
})
export class AppComponent{
  title = 'Tour of Heroes';
}
