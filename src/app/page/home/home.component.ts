import { Component } from '@angular/core';
import { SectionComponent } from "@shared/components/section/section.component";
import { HeroComponent } from "./hero/hero.component";

@Component({
  selector: 'app-home',
  imports: [SectionComponent, HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
 
}
