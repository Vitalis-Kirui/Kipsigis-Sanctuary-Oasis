import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { StructuresComponent } from './Components/structures/structures.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { ShadesComponent } from './Components/shades/shades.component';
import { HallComponent } from './Components/hall/hall.component';
import { CultureComponent } from './Components/culture/culture.component';
import { GateComponent } from './Components/gate/gate.component';
import { AccommondationsComponent } from './Components/accommondations/accommondations.component';
import { WrittingsComponent } from './Components/writtings/writtings.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    StructuresComponent,
    AboutusComponent,
    GalleryComponent,
    ShadesComponent,
    HallComponent,
    CultureComponent,
    GateComponent,
    AccommondationsComponent,
    WrittingsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
