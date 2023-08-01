import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent {


  constructor( private router: Router ) {}

    primero() {
      this.router.navigateByUrl('/dashboard/project/primerSemestre');
    }
    segundo() {
      this.router.navigateByUrl('/dashboard/project/segundoSemestre');
    }
    tercero() {
      this.router.navigateByUrl('/dashboard/project/tercerSemestre');
    }
    cuarto() {
      this.router.navigateByUrl('/dashboard/project/cuartoSemestre');
    }
    quinto() {
      this.router.navigateByUrl('/dashboard/project/quintoSemestre');
    }

}
