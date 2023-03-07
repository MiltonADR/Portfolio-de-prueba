import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { FondoComponent } from './components/fondo/fondo.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FondoComponent,
    ProyectosComponent,
    ContactoComponent,
    FooterComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
