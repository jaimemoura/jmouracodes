import { Oferta } from "../shared/oferta.model"
import {resolve} from "@angular/compiler-cli";

export class OfertasService {

  public ofertas: Oferta [] = [
    {
      id: 1,
      categoria: "restaurante",
      titulo: "Super Burger xyz",
      descricao_oferta: "Rodízio de Mini-hambúrger com opção de entrada.",
      anunciante: "Original Burger",
      valor: 29.90,
      destaque: true,
      imagens: [
        {url: "/assets/ofertas/1/img1.jpg"},
        {url: "/assets/ofertas/1/img2.jpg"},
        {url: "/assets/ofertas/1/img3.jpg"},
        {url: "/assets/ofertas/1/img4.jpg"}
      ]
    },
    {
      id: 2,
      categoria: "restaurante",
      titulo: "Cozinha Mexicana",
      descricao_oferta: "Almoço ou Jantar com Rodízio Mexicano delicioso.",
      anunciante: "Mexicana",
      valor: 32.90,
      destaque: true,
      imagens: [
        {url: "/assets/ofertas/2/img1.jpg"},
        {url: "/assets/ofertas/2/img2.jpg"},
        {url: "/assets/ofertas/2/img3.jpg"},
        {url: "/assets/ofertas/2/img4.jpg"}
      ]
    },
  ]
  public getOfertas (): Array<Oferta>{
    return this.ofertas
  }

    public getOfertas2(): Promise<Oferta[]> {
        return new Promise((resolve, reject) => {
          //algum tipo de processamento, que ao finalizar, chama a função resolve ou reject
          console.log('sera qe passou por aqui?')
          resolve(this.ofertas)
        })
    }
}
