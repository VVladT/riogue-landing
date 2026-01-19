import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'section[app-section]',
  imports: [],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css',
})
export class SectionComponent {
 sectionTitle = input<string | null>(null);
 description = input<string | null>(null);

 hassectionTitle = computed(() => {
  return !!this.sectionTitle()?.trim();
 });

 hasDescription = computed(() => {
  return !!this.description()?.trim();
 });
}
