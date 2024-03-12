import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './Perfil.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PerfilComponent],
  exports: [PerfilComponent]
})
export class PerfilModule { }
