//Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { CardsPageComponent } from './pages/cards-page/cards-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { CardSpecificPageComponent } from './pages/card-specific-page/card-specific-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'cards', component: CardsPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'card/:id', component: CardSpecificPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
