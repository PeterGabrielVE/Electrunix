import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

//Rutas
import { app_routing } from "./app.routes";

//Servicios
import { InformacionService } from "./services/informacion.service";

//Componentes

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { MailComponent } from './components/mail/mail.component';
import { FaqComponent } from './components/faq/faq.component';
import { Products1Component } from './components/products1/products1.component';
import { Products2Component } from './components/products2/products2.component';
import { MainComponent } from './components/main/main.component';
import { ProfileComponent } from './components/profile/profile.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PrincipalComponent,
    AboutComponent,
    ProductsComponent,
    MailComponent,
    FaqComponent,
    Products1Component,
    Products2Component,
    MainComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    app_routing,HttpModule
  ],
  providers: [
    InformacionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
