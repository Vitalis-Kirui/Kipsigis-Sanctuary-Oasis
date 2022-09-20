import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { StructuresComponent } from './Components/structures/structures.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path: 'structures', component: StructuresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
