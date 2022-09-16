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
import {AppRoutingModule} from "./app-routing.module";
import {environment} from "../environments/environment";
import  firebase from "firebase/compat/app";

firebase.initializeApp(environment.firebaseConfig)

@NgModule({
  declarations: [
    AppComponent,
    AcessoComponent,
    BannerComponent,
    LoginComponent,
    CadastroComponent
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
    AppRoutingModule

  ],
  providers: [Autenticacao],
  bootstrap: [AppComponent]
})
export class AppModule { }
