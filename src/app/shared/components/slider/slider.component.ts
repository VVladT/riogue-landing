import { Component, contentChildren, ElementRef, input, Renderer2, signal, effect, computed } from '@angular/core';
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-slider',
  imports: [NgClass],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent {
  itemsPerView = input(1);
  stepSize = input(1);
  itemsPerStep = computed(() => 
    Math.min(this.itemsPerView(), this.stepSize())
  )
  widthPercent = input(100);
  currentIndex = signal(0);

  items = contentChildren('sliderItem', { descendants: true, read: ElementRef});

  totalItems = computed(() => this.items().length);
  translateX = computed(() => {
    const percentPerItem = 100 / this.itemsPerView();
    return this.currentIndex() * percentPerItem;
  });

  maxIndex = computed(() =>
    Math.max(0, this.totalItems() - this.itemsPerView())
  );

  constructor(renderer: Renderer2) {
    effect(() => {
      const width = 100 / this.itemsPerView();
      this.items().forEach(item => {
        renderer.setStyle(item.nativeElement, 'flex', `0 0 ${width}%`);
        renderer.setStyle(item.nativeElement, 'max-width', `${width}%`);
        renderer.setStyle(item.nativeElement, 'box-sizing', 'border-box');
      })
    })
  }

  next() {
    this.currentIndex.update(i =>
      Math.min(this.maxIndex(), i + this.itemsPerStep())
    );
  }

  prev() {
    this.currentIndex.update(i =>
      Math.max(0, i - this.itemsPerStep())
    );
  }
}
