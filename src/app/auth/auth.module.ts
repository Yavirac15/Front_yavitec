import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { RegistroDocenteComponent } from './registro-docente/registro-docente.component';
import { RegistroEstudianteComponent } from './registro-estudiante/registro-estudiante.component';



@NgModule({
  declarations: [
    AuthComponent,
    RegistroDocenteComponent,
    RegistroEstudianteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
