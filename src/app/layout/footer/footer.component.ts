import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ionCallOutline, ionLocationOutline, ionLogoFacebook, ionLogoWhatsapp, ionMailOutline } from '@ng-icons/ionicons';

@Component({
  selector: 'footer[app-footer]',
  imports: [RouterLink, NgIcon],
  providers: [
    provideIcons(
      {
        ionLogoFacebook,
        ionLogoWhatsapp,
        ionLocationOutline,
        ionCallOutline,
        ionMailOutline,
      }
    )
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {

}
