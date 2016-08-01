/**
 * Created by gary on 6/25/16.
 */
import { Component } from "@angular/core";
import { RouterConfig, ROUTER_DIRECTIVES, provideRouter } from '@angular/router';
import { HeroService } from "./hero.service";
import { WorldBankService } from "./services/worldBankHttpService";
import { HeroesComponent } from './hero.component';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

import {AngularFire} from 'angularfire2';
import {Observable} from 'rxjs/Observable';

@Component({
  selector:'app-root',
  templateUrl:'./app/app.component.html',
  directives:[ROUTER_DIRECTIVES, HeroesComponent, MD_BUTTON_DIRECTIVES, MD_CARD_DIRECTIVES],
  providers: [WorldBankService, HeroService]
})
export class AppComponent{
  title = 'Tour of Heroes';
  items:Observable<any[]>;

  constructor(af: AngularFire){
    this.items = af.database.list('person');
    console.log(this.items);
  }
}
