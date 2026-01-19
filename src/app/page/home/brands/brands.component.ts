import { Component, input } from '@angular/core';
import { Brands } from './brands.model';
import { MarqueeComponent } from "@shared/components/marquee/marquee.component";
import { NgClass } from "../../../../../node_modules/@angular/common/types/_common_module-chunk";

@Component({
  selector: 'app-brands',
  imports: [MarqueeComponent, NgClass],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css',
})
export class BrandsComponent {
  brands = input<Brands>([])
}
