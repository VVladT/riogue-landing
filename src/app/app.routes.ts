import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from '@page/home/home.component';
import { AboutUsComponent } from '@page/about-us/about-us.component';

export const routes: Routes = [
    {
        path: "",
        component: LayoutComponent,
        children: [
            {
                path: "",
                component: HomeComponent
            },
            {
                path: "nosotros",
                component: AboutUsComponent
            },
        ]
    }
];
