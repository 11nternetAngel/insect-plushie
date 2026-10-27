import { Service } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-produtos',
  styleUrl: './produtos.css',
  templateUrl: './produtos.html',
})

export interface Inseto {
  nome: string;
  descricao: string;
  preco: number;
  fotos: string[];
}

@Service()
export class Insetos {
  private insetos: Inseto[] = [
    {
      nome: 'Pelúcia Abelha',
      descricao: 'Brinquedo de tema de insetos para entusiastas Com tema de insetos e design inspirado em filmes e séries, este brinquedo de pelúcia abelha atrai quem gosta de animais e natureza. Perfeito como presente ou para decoração de quarto.',
      preco: 65.25,
      fotos: [
        this.foto('Apis mellifera 2 Luc Viatour.JPG'),
        this.foto('Apis mellifera Western honey bee.jpg'),
        this.foto('Honey bee (Apis mellifera).jpg'),
        this.foto('Western honey bee (lat. Apis mellifera).jpg'),
        this.foto('Bee feeding on flower in ggp.jpg'),
      ],
    },
    {
      nome: 'Pelúcia Louva-Deus',
      descricao: 'A natureza está em exibição completa com a beleza deste recheado bonito animal rezando mantis plushie com asas brilhantes e antenas estendidas. Estes peluches suaves são feitos de materiais reciclados de alta qualidade e projetados para suportar o jogo de todo o dia. Com este peluche de pelúcia fácil de transportar mantis rezando animal recheado em reboque, a diversão segue você em todo lugar.',
      preco: 232.99,
      fotos: [
        this.foto('Monarch Butterfly Danaus plexippus Male 2664px.jpg'),
        this.foto('Danaus plexippus (7).jpg'),
        this.foto('Monarch butterfly in BBG (84685).jpg'),
        this.foto('Monarch Butterfly Danaus plexippus on Milkweed Hybrid 2800px.jpg'),
        this.foto('Monarch butterflies (Danaus plexippus plexippus) Piedra Herrada 2.jpg'),
      ],
    },
    {
      nome: 'Pelúcia Bicho-Pau',
      descricao: ' Dimensões: Stanley Stick Insect mede 3,1 x 7,5 x 10,6 polegadas. A altura do assento é de 3,1 polegadas. Stanley Stick Insect: Os fanáticos por bugs vão querer pegar essa adorável criatura para sua coleção. Coberto de pele marrom manchada lisa ao longo de seu corpo segmentado e pernas articuladas, o Stanley Stick Insect apresenta sondas de suedette macias, grandes olhos de marshmallow e um sorriso irresistível. ',
      preco: 234,
      fotos: [
        this.foto('Coccinella septempunctata Luc Viatour.JPG'),
        this.foto('Coccinella septempunctata Kaldari.jpg'),
        this.foto('Ladybird May 2008-1.jpg'),
        this.foto('Siebenpunkt-Marienkäfer (Coccinella septempunctata) auf Blüte im FFH-Gebiet "Viernheimer Waldheide und angrenzende Flächen".jpg'),
        this.foto('Coccinella septempunctata couple (aka).jpg'),
      ],
    },
    {
      nome: 'Formiga-cortadeira',
      descricao: 'Dança para avisar as outras onde estão as flores.',
      preco: 234,
      fotos: [
        this.foto('Leaf-cutter ant (Atta cephalotes) Belize.jpg'),
        this.foto('Leaf-cutter ant (Atta cephalotes) Belize 2.jpg'),
        this.foto('Leaf-cutter ant (Atta cephalotes) Belize 4.jpg'),
        this.foto('Atta cephalotes-pjt.jpg'),
        this.foto('Leaf cutter ants arp.jpg'),
      ],
    },
    {
      nome: 'Grilo',
      descricao: 'Dança para avisar as outras onde estão as flores.',
      preco: 234,
      fotos: [
        this.foto('Field Cricket. Gryllus campestris, female (45338248741).jpg'),
        this.foto('Świerszcz polny (Gryllus campestris).jpg'),
        this.foto('Gryllus campestris MHNT.jpg'),
        this.foto('Gryllus campestris - nymphe (9687812596).jpg'),
        this.foto('Cricket (15918718296).jpg'),
      ],
    },
  ];

  public getInsetos(): Inseto[] {
    return this.insetos;
  }

  public getSizeInsetos(): number {
    return this.insetos.length;
  }
}
