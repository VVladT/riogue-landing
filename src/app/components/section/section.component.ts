import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'section[app-section]',
  imports: [],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css',
})
export class SectionComponent {
 title = input<string | null>(null);
 description = input<string | null>(null);

 hasTitle = computed(() => {
  return !!this.title()?.trim();
 });

 hasDescription = computed(() => {
  return !!this.description()?.trim();
 });
}
