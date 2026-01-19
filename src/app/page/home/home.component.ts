import { Component, effect, inject, signal } from '@angular/core';
import { SectionComponent } from "@shared/components/section/section.component";
import { HeroComponent } from "./hero/hero.component";
import { SliderComponent } from "@shared/components/slider/slider.component";
import { CardOverlayComponent } from "@shared/components/card-overlay/card-overlay.component";
import { BrandsComponent } from "./brands/brands.component";
import { HomeStore } from './home.store';

@Component({
  selector: 'app-home',
  imports: [SectionComponent, HeroComponent, SliderComponent, CardOverlayComponent, BrandsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [HomeStore]
})
export class HomeComponent { 
  store = inject(HomeStore);

  constructor () {
    this.store.load();
  }
}
