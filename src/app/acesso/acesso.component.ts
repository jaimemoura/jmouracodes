import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger, keyframes } from "@angular/animations";

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css'],
  animations: [
    trigger('animacao-banner', [
      state('criado', style ({
        opacity: 1
      })),
      transition('void => criado',[
        style({opacity: 0, transform: 'translate(-50px, 0)' }),
        animate('500ms 1s ease-in-out') //duração, delay e aceleração
      ])
      ]),
      trigger('animacao-painel', [
        state('criado', style ({
          opacity: 1
        })),
        transition('void => criado',[
          style({opacity: 0, transform: 'translate(50px, 0)' }),
          animate('500ms 1s ease-in-out', keyframes([
            style ({ offset: 0.15, opacity: 1, transform: 'translateX(0)'}),
          ])) //duração, delay e aceleração
          ])
      ])
  ]
})
export class AcessoComponent implements OnInit {

  public estadoBanner: string = 'criado'
  public estadoPainel: string = 'criado'

  public cadastro: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  public exibirPainel(event: string) : void {
    this.cadastro = event === 'cadastro'
  }
}
