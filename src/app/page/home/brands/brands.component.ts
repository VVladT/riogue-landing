import { Component, input } from '@angular/core';
import { Brands } from './brands.model';
import { MarqueeComponent } from "@shared/components/marquee/marquee.component";

@Component({
  selector: 'app-brands',
  imports: [MarqueeComponent],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css',
})
export class BrandsComponent {
  brands = input<Brands>([])
}
