import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

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
import { CadastroComponent } from './cadastro/cadastro.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatTreeModule, MatIconModule, MatExpansionModule  } from '@angular/material';

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
    CadastroComponent
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
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [ AppComponent ],
  entryComponents: [ CreateProjectComponent ]
})
export class AppModule { }
