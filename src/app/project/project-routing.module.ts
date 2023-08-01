import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { PagesComponent } from '../pages/pages.component';
import { PrimerSemestreComponent } from './primer-semestre/primer-semestre.component';
import { SegundoSemestreComponent } from './segundo-semestre/segundo-semestre.component';
import { TercerSemestreComponent } from './tercer-semestre/tercer-semestre.component';
import { CuartoSemestreComponent } from './cuarto-semestre/cuarto-semestre.component';
import { QuintoSemestreComponent } from './quinto-semestre/quinto-semestre.component';

const routes: Routes = [
  { path: 'dashboard', component:PagesComponent },
  { path: 'project', component: ProjectListComponent },
  { path: 'projectCreate', component: ProjectCreateComponent },
  { path: 'projectEdit', component: ProjectEditComponent },
  { path: 'projectDetails', component: ProjectDetailsComponent },
  { path: 'primerSemestre', component: PrimerSemestreComponent },
  { path: 'segundoSemestre', component: SegundoSemestreComponent },
  { path: 'tercerSemestre', component: TercerSemestreComponent },
  { path: 'cuartoSemestre', component: CuartoSemestreComponent },
  { path: 'quintoSemestre', component: QuintoSemestreComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule  { }
