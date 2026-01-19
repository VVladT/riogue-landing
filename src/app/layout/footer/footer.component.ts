import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ionLogoFacebook, ionLogoWhatsapp } from '@ng-icons/ionicons';

@Component({
  selector: 'footer[app-footer]',
  imports: [RouterLink, NgIcon],
  providers: [
    provideIcons(
      {
        ionLogoFacebook,
        ionLogoWhatsapp,
      }
    )
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {

}
