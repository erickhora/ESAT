import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ResumoComponent } from './home/feature/resumo/resumo.component';
import { TabelasComponent } from './home/feature/tabelas/tabelas.component';
import { RequisicoesComponent } from './home/feature/requisicoes/requisicoes.component';
import { FeatureComponent } from './home/feature/feature.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home/:feature/:id', component: FeatureComponent },
  { path: '**', component: LandingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
