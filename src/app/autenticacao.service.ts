import { Usuario } from "./acesso/usuario.model";
import firebase from "firebase/compat/app";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class Autenticacao {

  public token_id: string

  constructor(private router: Router) {}

  public cadastrarUsuario(usuario: Usuario): Promise<any> {
   return firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
      .then(() => {

        delete usuario.senha

        firebase.database().ref(`usuario_detalhe/${btoa(usuario.email)}`)
          .set( usuario )
      })
      .catch((error: Error) => {
        console.log(error)
      })
  }

  public autenticar(email: string, senha: string): void {

    firebase.auth().signInWithEmailAndPassword(email, senha)
      .then((resposta: any)=> {
          firebase.auth().currentUser.getIdToken()
            .then((idToken) => {
                this.token_id = idToken
                this.router.navigate(['home'])
            })
      })
      .catch((error: Error)=> console.log(error))
  }
}
