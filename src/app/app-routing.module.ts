import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth/auth.component';
import { PagesComponent } from './pages/pages.component';
import { RegistroDocenteComponent } from './auth/registro-docente/registro-docente.component';
import { RegistroEstudianteComponent } from './auth/registro-estudiante/registro-estudiante.component';
import { PrimerSemestreComponent } from './project/primer-semestre/primer-semestre.component';

const routes: Routes = [
  { path:'', redirectTo:'/login', pathMatch:'full' },
  { path:'login', component: AuthComponent },
  { path:'registroDocente', component: RegistroDocenteComponent },
  { path:'registroEstudiante', component: RegistroEstudianteComponent },
  { path: 'primerSemestre', component: PrimerSemestreComponent },
  { path:'dashboard', component: PagesComponent,
    children: [
      { path: 'project',
        loadChildren: () => import('./project/project.module').then(m => m.ProjectModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
