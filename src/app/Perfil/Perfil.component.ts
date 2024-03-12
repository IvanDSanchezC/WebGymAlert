import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-Perfil',
  templateUrl: './Perfil.component.html',
  styleUrls: ['./Perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private routerPath: Router,
    private router: ActivatedRoute) { }

  ngOnInit() {
  }

  paginaLogin(): void {
    
    this.routerPath.navigate(['/login/']); 
  }

}
