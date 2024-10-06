import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewstagaireComponent } from './newstagaire/newstagaire.component';
import { ListstagairesComponent } from './liststagaires/liststagaires.component';
import { DetailsStagaireComponent } from './details-stagaire/details-stagaire.component';
import { BodyAcceuilComponent } from './body-acceuil/body-acceuil.component';
import { ContactComponent } from './contact/contact.component';
import { EncadreursComponent } from './encadreurs/encadreurs.component';
import { LOGINComponent } from './login/login.component';
import { ABOUTUSComponent } from './aboutus/aboutus.component';
import { NavComponent } from './nav/nav.component';
import { Aboutus11Component } from './aboutus11/aboutus11.component';
import { Contact11Component } from './contact11/contact11.component';
import { AcceuilextComponent } from './acceuilext/acceuilext.component';
import { MenuComponent } from './menu/menu.component';
import { ProfilComponent } from './profil/profil.component';
import { JournalComponent } from './journal/journal.component';
import { FormsModule } from '@angular/forms';
import { ComportementComponent } from './comportement/comportement.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    NewstagaireComponent,
    ListstagairesComponent,
  
    DetailsStagaireComponent,
        BodyAcceuilComponent,
        ContactComponent,
        EncadreursComponent,
        LOGINComponent,
        ABOUTUSComponent,
        NavComponent,
        Aboutus11Component,
        Contact11Component,
        AcceuilextComponent,
        MenuComponent,
        ProfilComponent,
        JournalComponent,
        ComportementComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
