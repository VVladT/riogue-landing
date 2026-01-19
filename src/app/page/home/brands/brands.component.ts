import { Component, input } from '@angular/core';
import { Brands } from './brands.model';
import { MarqueeComponent } from "@shared/components/marquee/marquee.component";
import { SectionComponent } from "@shared/components/section/section.component";

@Component({
  selector: 'app-brands',
  imports: [MarqueeComponent, SectionComponent],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css',
})
export class BrandsComponent {
  brands = input<Brands>([])
}
