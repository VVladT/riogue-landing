import { Component, inject } from '@angular/core';
import { CompanyIdentityComponent } from "./company-identity/company-identity.component";
import { AboutUsStore } from './about-us.store';

@Component({
  selector: 'app-about-us',
  imports: [CompanyIdentityComponent],
  templateUrl: './about-us.component.html',
  providers: [AboutUsStore],
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent {

  store = inject(AboutUsStore);

  constructor() {
    this.store.load();
  }

}
