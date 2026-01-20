import { inject, Injectable, signal } from "@angular/core";
import { CompanyIdentityService } from "./company-identity/company-identity.service";
import { CompanyIdentityList } from "./company-identity/company-identity.model";

@Injectable()
export class AboutUsStore {

    private identityListService = inject(CompanyIdentityService);
    identityList = signal<CompanyIdentityList>([]);
   
    loading = signal(true);

    async load() {
        this.loading.set(true);
        
        const [identityList] = await Promise.all([
            this.identityListService.getIdentityList()
        ])

        this.identityList.set(identityList);

        this.loading.set(false);
    }
}