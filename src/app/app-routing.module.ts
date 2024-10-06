import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BodyAcceuilComponent } from './body-acceuil/body-acceuil.component';
import { NewstagaireComponent } from './newstagaire/newstagaire.component';
import { EncadreursComponent } from './encadreurs/encadreurs.component';
import { ContactComponent } from './contact/contact.component';
import { ListstagairesComponent } from './liststagaires/liststagaires.component';
import { ABOUTUSComponent } from './aboutus/aboutus.component';
import { LOGINComponent } from './login/login.component';
import { Contact11Component } from './contact11/contact11.component';
import { Aboutus11Component } from './aboutus11/aboutus11.component';
import { AcceuilextComponent } from './acceuilext/acceuilext.component';
import { MenuComponent } from './menu/menu.component';
import { ProfilComponent } from './profil/profil.component';
import { JournalComponent } from './journal/journal.component';
import { ComportementComponent } from './comportement/comportement.component';


const routes: Routes = [
  { path: '', component: BodyAcceuilComponent},
  {path : 'signin' , component: NewstagaireComponent },
  {path : 'encadreur' , component:EncadreursComponent },
  {path : 'contact' , component:ContactComponent },
  {path : 'contact1' , component:Contact11Component },
  {path: 'stagairs', component:ListstagairesComponent},
  {path: 'aboutus', component:ABOUTUSComponent},
  {path: 'aboutus1', component:Aboutus11Component},
  {path: 'login', component:LOGINComponent},
  {path:'acceuil1',component:AcceuilextComponent},
  {path:'menu',component:MenuComponent},
  {path:'profil',component:ProfilComponent},
  {path:'journal', component:JournalComponent},
  {path:'comportement',component:ComportementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
