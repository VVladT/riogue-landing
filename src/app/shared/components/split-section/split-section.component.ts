import { Component, input } from '@angular/core';

@Component({
  selector: 'app-split-section',
  imports: [],
  templateUrl: './split-section.component.html',
  styleUrl: './split-section.component.css',
})
export class SplitSectionComponent {
  splitSectionTitle = input('');
  description = input('');
  
  imgSrc = input('');
  imgAlt = input('');
  imgOnRight = input(false);
}
