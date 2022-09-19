import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { AcessoComponent } from './acesso/acesso.component';
import { BannerComponent } from './acesso/banner/banner.component';
import { LoginComponent } from './acesso/login/login.component';
import { CadastroComponent } from './acesso/cadastro/cadastro.component';
import { ReactiveFormsModule} from "@angular/forms";
import { NoopAnimationsModule} from "@angular/platform-browser/animations";
import { Autenticacao } from "./autenticacao.service";
import { AngularFireAuthModule} from "@angular/fire/compat/auth";
import { AngularFirestoreModule} from "@angular/fire/compat/firestore";
import { AngularFireStorageModule} from "@angular/fire/compat/storage";
import { AngularFireModule} from "@angular/fire/compat";
import { RouterModule} from "@angular/router";
import { ROUTES} from "./app.routes";
import {AppRoutingModule} from "./app-routing.module";
import {environment} from "../environments/environment";
import  firebase from "firebase/compat/app";
import { HomeComponent } from './home/home.component';
import { PublicacoesComponent } from './home/publicacoes/publicacoes.component';


firebase.initializeApp(environment.firebaseConfig)

@NgModule({
  declarations: [
    AppComponent,
    AcessoComponent,
    BannerComponent,
    LoginComponent,
    CadastroComponent,
    HomeComponent,
    PublicacoesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES)



  ],
  providers: [Autenticacao],
  bootstrap: [AppComponent]
})
export class AppModule { }
