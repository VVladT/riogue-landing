import { Component, input } from '@angular/core';
import { SectionComponent } from "@shared/components/section/section.component";
import { SliderComponent } from "@shared/components/slider/slider.component";
import { CardOverlayComponent } from "@shared/components/card-overlay/card-overlay.component";
import { Solutions } from './solutions.model';

@Component({
  selector: 'app-solutions',
  imports: [SectionComponent, SliderComponent, CardOverlayComponent],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.css',
})
export class SolutionsComponent {
  title = input<string>("");
  description = input<string>("");

  solutions = input<Solutions>([])

  itemsPerView = input(1);
}
