//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//Services
import { MagicService } from './services/magic/magic.service';
import { LoginService } from './services/login/login.service';
import { ContactService } from './services/contact/contact.service';

//Components
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CardsPageComponent } from './pages/cards-page/cards-page.component';
import { CardSpecificPageComponent } from './pages/card-specific-page/card-specific-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SearchComponent } from './components/search/search.component';
import { CardComponent } from './components/card/card.component';
import { SelectedCardComponent } from './components/selected-card/selected-card.component';
import { TextToggleComponent } from './components/text-toggle/text-toggle.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    CardsPageComponent,
    CardSpecificPageComponent,
    AboutPageComponent,
    ContactPageComponent,
    LoginFormComponent,
    NavigationComponent,
    SearchComponent,
    CardComponent,
    SelectedCardComponent,
    TextToggleComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [MagicService, LoginService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
