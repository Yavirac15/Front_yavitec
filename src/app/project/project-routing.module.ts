import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { PagesComponent } from '../pages/pages.component';
import { AuthComponent } from '../auth/auth/auth.component';

const routes: Routes = [
  { path: 'dashboard', component:PagesComponent },
  { path: 'project', component: ProjectListComponent },
  { path: 'projectCreate', component: ProjectCreateComponent },
  { path: 'projectEdit/:id', component: ProjectEditComponent },
  { path: 'projectDetails', component: ProjectDetailsComponent },
  //{ path: 'login', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule  { }
