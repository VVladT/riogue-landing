import { Component, input, signal } from '@angular/core';
import { RouterLink } from "@angular/router";
import { NgIcon } from "@ng-icons/core"
import { heroBars3Solid } from "@ng-icons/heroicons/solid"

@Component({
  selector: 'header[app-header]',
  imports: [RouterLink, NgIcon],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  host: {
    '[class.white]': `variant()==='white'`,
    '[class.blue]': `variant()==='blue'`
  }
})
export class HeaderComponent {
  variant = input<'white' | 'blue'>('white');
  icon = signal(heroBars3Solid);
  sidebarOpen = signal(false);

  toggleSidebar() {
    this.sidebarOpen.update((open) => !open);
  }
}
