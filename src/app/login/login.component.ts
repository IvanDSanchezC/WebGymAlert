import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private routerPath: Router,
    private router: ActivatedRoute) { }

  ngOnInit() {
  }

  crearPerfil(event: Event): void {
    event.preventDefault(); 
    this.routerPath.navigate(['/perfil/']);
  }

}
