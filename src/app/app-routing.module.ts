import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { HallComponent } from './Components/hall/hall.component';
import { HomeComponent } from './Components/home/home.component';
import { ShadesComponent } from './Components/shades/shades.component';
import { StructuresComponent } from './Components/structures/structures.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'structures', component: StructuresComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'shades', component: ShadesComponent },
  {path:'hall', component : HallComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
