import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card-overlay',
  imports: [],
  templateUrl: './card-overlay.component.html',
  styleUrl: './card-overlay.component.css',
})
export class CardOverlayComponent {
  imgSrc = input("")
  imgAlt = input("")
}
