import { Injectable } from '@angular/core';
import { Brands } from './brands.model'

@Injectable({
  providedIn: 'root',
})
export class BrandsService {
  private readonly basePath = 'images/brands'

  private readonly brands = [
    'bbva-continental',
    'mapfre',
    'movistar',
    'claro',
    'scotiabank',
    'banco-de-la-nacion'
  ];

  getBrands(): Brands {
    return this.brands.map(name => ({
      name,
      logoUrl: `${this.basePath}/${name}.svg`
    }));
  }
}
