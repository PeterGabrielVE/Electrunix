import { RouterModule, Routes } from '@angular/router';

import {
    AboutComponent,
    MailComponent,
    PrincipalComponent,
    ProductsComponent
} from "./components/index.paginas";

const app_routes: Routes = [
    { path: 'home', component: PrincipalComponent },
    { path: 'about', component: AboutComponent },
    { path: 'mail', component: MailComponent },
    { path: 'products', component: ProductsComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash:true });