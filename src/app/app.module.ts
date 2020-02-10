import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './home/sidenav/sidenav.component';
import { HeaderComponent } from './home/header/header.component';
import { FeatureComponent } from './home/feature/feature.component';
import { CreateProjectComponent } from './home/sidenav/create-project/create-project.component';
import { SignupComponent } from './signup/signup.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatTreeModule, MatIconModule, MatExpansionModule  } from '@angular/material';
import { ResumoComponent } from './home/feature/resumo/resumo.component';
import { TabelasComponent } from './home/feature/tabelas/tabelas.component';
import { RequisicoesComponent } from './home/feature/requisicoes/requisicoes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingPageComponent,
    NavbarComponent,
    HomeComponent,
    SidenavComponent,
    HeaderComponent,
    FeatureComponent,
    CreateProjectComponent,
    SignupComponent,
    ResumoComponent,
    TabelasComponent,
    RequisicoesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatTreeModule,
    MatExpansionModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [ AppComponent ],
  entryComponents: [ CreateProjectComponent ]
})
export class AppModule { }
