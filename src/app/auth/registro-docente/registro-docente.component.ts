import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-docente',
  templateUrl: './registro-docente.component.html',
  styleUrls: ['./registro-docente.component.css']
})
export class RegistroDocenteComponent {

  constructor( private router: Router ) {}

    login() {
      this.router.navigateByUrl('/login');
    }

}
