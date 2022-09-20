import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { HomeComponent } from './Components/home/home.component';
import { StructuresComponent } from './Components/structures/structures.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'structures', component: StructuresComponent },
  { path: 'aboutus', component: AboutusComponent },
  {path:'gallery', component : GalleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
