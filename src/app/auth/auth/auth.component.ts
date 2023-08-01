import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  constructor( private router: Router ) {}

    login() {
      this.router.navigateByUrl('/dashboard/project/project');
    }

    registre() {
      this.router.navigateByUrl('/registroDocente')
    }

    register() {
      this.router.navigateByUrl('/registroEstudiante')
    }

}
