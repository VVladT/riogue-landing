import { Component, HostBinding, input, signal } from '@angular/core';
import { NgClass } from "@angular/common";
import { RouterLink } from "@angular/router";
import { NgIcon } from "@ng-icons/core"
import { heroBars3Solid } from "@ng-icons/heroicons/solid"

@Component({
  selector: 'header[app-header]',
  imports: [RouterLink, NgIcon],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  variant = input<'white' | 'blue'>('white');
  icon = signal(heroBars3Solid);
  sidebarOpen = signal(false);

  toggleSidebar() {
    this.sidebarOpen.update((open) => !open);
  }

  @HostBinding('class.white') get whiteClass() {
    return this.variant() === 'white';
  }

  @HostBinding('class.blue') get blueClass() {
    return this.variant() === 'blue';
  }
}
