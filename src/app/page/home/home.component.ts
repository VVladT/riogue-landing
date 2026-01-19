import { Component, effect, inject, signal } from '@angular/core';
import { SectionComponent } from "@shared/components/section/section.component";
import { HeroComponent } from "./hero/hero.component";
import { SliderComponent } from "@shared/components/slider/slider.component";
import { CardOverlayComponent } from "@shared/components/card-overlay/card-overlay.component";
import { BrandsComponent } from "./brands/brands.component";
import { HomeStore } from './home.store';
import { SolutionsComponent } from "./solutions/solutions.component";

@Component({
  selector: 'app-home',
  imports: [SectionComponent, HeroComponent, SliderComponent, CardOverlayComponent, BrandsComponent, SolutionsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [HomeStore],
  host: {
    '(window:resize)': 'adjustItemsPerView()'
  }
})
export class HomeComponent { 
  store = inject(HomeStore);
  itemsPerView = signal(3);

  constructor () {
    this.store.load();
    this.adjustItemsPerView();
  }

  adjustItemsPerView() {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      this.itemsPerView.set(Math.round(width / 300));
    }
  }
}
