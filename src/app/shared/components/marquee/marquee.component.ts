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
      track.style.setProperty('--marquee-width', `-${width}px`);
      
      const child = track.children[0];
      const clone = child.cloneNode(true);
      
      /*
      const images = clone.querySelectorAll('img');
      const originalImages = child.querySelectorAll('img');
      
      for (let i = 0; i < originalImages.length; i++) {
        const img = originalImages[i];
        const clonedImg = images[i];
        
        console.log(img.src,clonedImg.src);
      }
      */
      renderer.appendChild(track, clone);
    });
  }
}
