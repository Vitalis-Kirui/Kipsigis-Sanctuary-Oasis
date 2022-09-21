import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { AccommondationsComponent } from './Components/accommondations/accommondations.component';
import { CultureComponent } from './Components/culture/culture.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { GateComponent } from './Components/gate/gate.component';
import { HallComponent } from './Components/hall/hall.component';
import { HomeComponent } from './Components/home/home.component';
import { ShadesComponent } from './Components/shades/shades.component';
import { StructuresComponent } from './Components/structures/structures.component';
import { WrittingsComponent } from './Components/writtings/writtings.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'structures', component: StructuresComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'structures/shades', component: ShadesComponent },
  { path: 'structures/hall', component: HallComponent },
  { path: 'structures/culture', component: CultureComponent },
  { path: 'structures/gate', component: GateComponent },
  { path: 'structures/accommondations', component: AccommondationsComponent},
  { path: 'structures/writtings', component: WrittingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
