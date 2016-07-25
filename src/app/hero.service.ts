/**
 * Created by gary on 6/25/16.
 */

import { Injectable } from "@angular/core";
import { Hero } from "./models/Hero";
import { HEROES } from "./mock-hero";

@Injectable()
export class HeroService{
  getHero(id: number) : Hero{
    return HEROES[id];
  }

  getHeroes(){
    return Promise.resolve(HEROES);
  }
}
