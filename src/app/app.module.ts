import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { SobreComponent } from './sobre/sobre.component';
import { PopularComponent } from './popular/popular.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { LocalizacaoComponent } from './localizacao/localizacao.component';
import { FooterComponent } from './footer/footer.component';
import { PopularItemComponent } from './popular/popular-item/popular-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    SobreComponent,
    PopularComponent,
    ComentariosComponent,
    LocalizacaoComponent,
    FooterComponent,
    PopularItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
