import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from '../components/contacto/contacto.component';
import { HomeComponent } from '../components/home/home.component';
import { ProyectosComponent } from '../components/proyectos/proyectos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'contacto', component: ContactoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
