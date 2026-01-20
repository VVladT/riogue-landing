import { Component, effect, inject, signal } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";
import { BrandsComponent } from "./brands/brands.component";
import { HomeStore } from './home.store';
import { SolutionsComponent } from "./solutions/solutions.component";
// import { SectionComponent } from "@shared/components/section/section.component";

@Component({
  selector: 'app-home',
  imports: [HeroComponent, BrandsComponent, SolutionsComponent,
    // SectionComponent
  ],
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
