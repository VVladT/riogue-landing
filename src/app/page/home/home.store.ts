import { inject, Injectable, signal } from "@angular/core";
import { BrandsService } from "./brands/brands.service";
import { Brands } from "./brands/brands.model";
import { SolutionsService } from "./solutions/solutions.service";
import { Solutions } from "./solutions/solutions.model";

@Injectable()
export class HomeStore {
    private brandsService = inject(BrandsService);
    brands = signal<Brands>([]);

    private solutionsService = inject(SolutionsService);
    solutions = signal<Solutions>([]);
   
    loading = signal(true);

    async load() {
        this.loading.set(true);
        
        const [brands, solutions] = await Promise.all([
            this.brandsService.getBrands(),
            this.solutionsService.getSolutions()
        ])
        this.brands.set(brands);
        this.solutions.set(solutions);

        this.loading.set(false);
    }
}