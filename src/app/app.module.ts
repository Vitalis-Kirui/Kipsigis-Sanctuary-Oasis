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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    StructuresComponent,
    AboutusComponent,
    GalleryComponent,
    ShadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
