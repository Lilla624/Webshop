import { Component } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';

interface EdesGumicukrok {
  id: string;
  nev: string;
  image: string;
  ar: number;
  darab: number;
}

@Component({
  selector: 'app-gumicukor',
  templateUrl: './edes-gumicukrok.component.html',
  styleUrls: ['./edes-gumicukrok.component.css']
})
export class EdesGumicukrokComponent {
  gumicukrok: EdesGumicukrok[] = [
    {
      id: 'bazooka',
      nev: 'Bazooka Rattlerz Melting Fruity Candy 40g',
      image: './assets/cukorImg/Bazooka Rattlerz Melting Fruity Candy 40g.jpg',
      ar: 563,
      darab: 1
    },
    {
      id: 'nerds',
      nev: 'Nerds Gummy Clusters Very Berry 142g',
      image: './assets/cukorImg/Nerds Gummy Clusters Very Berry 142g.jpg',
      ar: 2190,
      darab: 1
    },
    {
      id: 'nerds',
      nev: 'Nerds Gummy Clusters 141g',
      image: './assets/cukorImg/Nerds Gummy Clusters 141g.jpg',
      ar: 1990,
      darab: 1
    },
    {
      id: 'nerds',
      nev: 'Nerds Gummy Clusters Theater Box 85g',
      image: './assets/cukorImg/Nerds Gummy Clusters Theater Box 85g.jpg',
      ar: 1490,
      darab: 1
    },
    {
      id: 'nerds',
      nev: 'Nerds Candy Grape and Strawberry 142g',
      image: './assets/cukorImg/Nerds Candy Grape and Strawberry 142g.jpg',
      ar: 1490,
      darab: 1
    },
    {
      id: 'nerds',
      nev: 'Nerds Gummy Clusters Very Berry Share Pouch 85g',
      image: './assets/cukorImg/Nerds Gummy Clusters Very Berry Share Pouch 85g.jpg',
      ar: 1690,
      darab: 1
    },
    {
      id: 'nerds',
      nev: 'Nerds Big Chewy Theater Box 120g',
      image: './assets/cukorImg/Nerds Big Chewy Theater Box 120g.jpg',
      ar: 1430,
      darab: 1
    },
    {
      id: 'nerds',
      nev: 'Nerds Frosty Fruit Candy 141g',
      image: './assets/cukorImg/Nerds Frosty Fruit Candy 141g.jpg',
      ar: 1690,
      darab: 1
    },
    {
      id: 'nerds',
      nev: 'Wonka Nerds Grape And Strawberry 47g',
      image: './assets/cukorImg/Wonka Nerds Grape And Strawberry 47g.jpg',
      ar: 990,
      darab: 1
    },
    {
      id: 'nerds',
      nev: 'Nerds Fruits Candy 142g',
      image: './assets/cukorImg/Nerds Fruits Candy 142g.jpg',
      ar: 1490,
      darab: 1
    },
    {
      id: 'nerds',
      nev: 'Nerds Watermelon And Cherry 47g',
      image: './assets/cukorImg/Nerds Watermelon And Cherry 47g.jpg',
      ar: 990,
      darab: 1
    },
    {
      id: 'nerds',
      nev: 'Wonka Nerds Rope Rainbow Candy 26g',
      image: './assets/cukorImg/Wonka Nerds Rope Rainbow Candy 26g.jpg',
      ar: 990,
      darab: 1
    },
    {
      id: 'skittles',
      nev: 'Skittles Fruits 38g',
      image: './assets/cukorImg/Skittles Fruits 38g.jpg',
      ar: 360,
      darab: 1
    },
    {
      id: 'skittles',
      nev: 'Skittles dóza 195g',
      image: './assets/cukorImg/Skittles dóza 195g.jpg',
      ar: 3868,
      darab: 1
    },
    {
      id: 'skittles',
      nev: 'Skittles Fruity Tea 40g',
      image: './assets/cukorImg/Skittles Fruity Tea 40g.jpg',
      ar: 990,
      darab: 1
    },
    {
      id: 'bazooka',
      nev: 'Bazooka Rattlerz Fruity Share Bag 100g',
      image: './assets/cukorImg/Bazooka Rattlerz Fruity Share Bag 100g.jpg',
      ar: 1133,
      darab: 1
    },
    {
      id: 'bazooka',
      nev: 'Bazooka Rattlerz Fruity Bag 40g',
      image: './assets/cukorImg/Bazooka Rattlerz Fruity Bag 40g.jpg',
      ar: 304,
      darab: 1
    },
    {
      id: 'bazooka',
      nev: 'Bazooka Rattlerz Fruity Chewy Candies 120g',
      image: './assets/cukorImg/Bazooka Rattlerz Fruity Chewy Candies 120g.jpg',
      ar: 1133,
      darab: 1
    },
    {
      id: 'bazooka',
      nev: 'Bazooka Rattlerz Fruity 12x120g',
      image: './assets/cukorImg/Bazooka Rattlerz Fruity 12x120g.jpg',
      ar: 4100,
      darab: 1
    },
    {
      id: 'bazooka',
      nev: 'Bazooka Rattlerz Fruity Chewy Candy 10x18g',
      image: './assets/cukorImg/Bazooka Rattlerz Fruity Chewy Candy 10x18g.jpg',
      ar: 1200,
      darab: 1
    },
    {
      id: 'bazooka',
      nev: 'Bazooka Juicy Drop Pop 26g',
      image: './assets/cukorImg/Bazooka Juicy Drop Pop 26g.jpg',
      ar: 950,
      darab: 1
    },
    {
      id: 'bazooka',
      nev: 'Bazooka Push Pop 15g',
      image: './assets/cukorImg/Bazooka Push Pop 15g.jpg',
      ar: 490,
      darab: 1
    },
    {
      id: 'bazooka',
      nev: 'Bazooka Ring Pop 15g',
      image: './assets/cukorImg/Bazooka Ring Pop 15g.jpg',
      ar: 390,
      darab: 1
    }
  ];

  kosarbaRak(i: number) {
    const termek = this.gumicukrok[i];
    console.log(`${termek.nev} ${termek.darab} db került a kosárba.`);
  }
}
