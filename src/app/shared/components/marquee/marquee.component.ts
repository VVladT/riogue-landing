import { Component, computed, contentChild, effect, ElementRef, input, Renderer2, signal, TemplateRef, untracked, viewChild } from '@angular/core';

@Component({
  selector: 'app-marquee',
  imports: [],
  templateUrl: './marquee.component.html',
  styleUrl: './marquee.component.css',
})
export class MarqueeComponent {
  contentTemplate = viewChild('contentTemplate', {read: TemplateRef});
  content = contentChild.required('content', {read: ElementRef});
  track = viewChild.required('marqueeTrack', {read: ElementRef});

  speed = input(50);
  duration = computed(() => this.track().nativeElement.clientWidth / this.speed());

  constructor (renderer: Renderer2) {
    effect(() => {
      const track = this.track().nativeElement;
      const content = this.content().nativeElement;

      const width = content.clientWidth;
      track.style.setProperty('--marquee-width', `${width}px`);

      const child = track.children[0];
      const clone = child.cloneNode(true);
      renderer.appendChild(track, clone);
    });
  }
}
