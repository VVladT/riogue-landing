import { Component, input } from '@angular/core';
import { SplitSectionComponent } from "@shared/components/split-section/split-section.component";
import { CompanyIdentityList } from './company-identity.model';

@Component({
  selector: 'app-company-identity',
  imports: [SplitSectionComponent],
  templateUrl: './company-identity.component.html',
  styleUrl: './company-identity.component.css',
})
export class CompanyIdentityComponent {
  identityList = input<CompanyIdentityList>([]);
}
