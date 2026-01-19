import { inject, Injectable, signal } from "@angular/core";
import { BrandsService } from "./brands/brands.service";
import { Brands } from "./brands/brands.model";

@Injectable()
export class HomeStore {
    private brandsService = inject(BrandsService);
    brands = signal<Brands>([]);
    loading = signal(true);

    async load() {
        this.loading.set(true);
        
        const [brands] = await Promise.all([this.brandsService.getBrands()])
        this.brands.set(brands);

        this.loading.set(false);
    }
}