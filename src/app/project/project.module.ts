import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { ProjectRoutingModule } from './project-routing.module';
import { PrimerSemestreComponent } from './primer-semestre/primer-semestre.component';
import { SegundoSemestreComponent } from './segundo-semestre/segundo-semestre.component';
import { TercerSemestreComponent } from './tercer-semestre/tercer-semestre.component';
import { CuartoSemestreComponent } from './cuarto-semestre/cuarto-semestre.component';
import { QuintoSemestreComponent } from './quinto-semestre/quinto-semestre.component';



@NgModule({
  declarations: [
    ProjectCreateComponent,
    ProjectListComponent,
    ProjectDetailsComponent,
    ProjectEditComponent,
    PrimerSemestreComponent,
    SegundoSemestreComponent,
    TercerSemestreComponent,
    CuartoSemestreComponent,
    QuintoSemestreComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule
  ]
})
export class ProjectModule { }
