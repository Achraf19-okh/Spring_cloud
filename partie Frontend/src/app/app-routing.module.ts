import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantComponent } from './Etudiant/Etudiant.component';

const routes: Routes = [
  { path: '', redirectTo: 'Etudiant', pathMatch: 'full' },
  { path: 'Etudiants', component: EtudiantComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
