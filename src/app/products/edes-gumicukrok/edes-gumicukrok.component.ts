import { Component } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';

interface EdesGumicukrok {
  id: string;
  nev: string;
  image: string;
  leiras: string;
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
      leiras: '',
      ar: 563,
      darab: 1
    },
    {
      id: 'nerds',
      nev: 'Nerds Gummy Clusters Very Berry 142g',
      image: './assets/cukorImg/Nerds Gummy Clusters Very Berry 142g.jpg',
      leiras: '',
      ar: 2190,
      darab: 1
    },
    {
      id: 'nerds',
      nev: 'Nerds Gummy Clusters 141g',
      image: './assets/cukorImg/Nerds Gummy Clusters 141g.jpg',
      leiras: '',
      ar: 1990,
      darab: 1
    },
    {
      id: 'nerds',
      nev: 'Nerds Gummy Clusters Theater Box 85g',
      image: './assets/cukorImg/Nerds Gummy Clusters Theater Box 85g.jpg',
      leiras: '',
      ar: 1490,
      darab: 1
    },
    {
      id: 'nerds',
      nev: 'Nerds Candy Grape and Strawberry 142g',
      image: './assets/cukorImg/Nerds Candy Grape and Strawberry 142g.jpg',
      leiras: '',
      ar: 1490,
      darab: 1
    },
    {
      id: 'nerds',
      nev: 'Nerds Gummy Clusters Very Berry Share Pouch 85g',
      image: './assets/cukorImg/Nerds Gummy Clusters Very Berry Share Pouch 85g.jpg',
      leiras: '',
      ar: 1690,
      darab: 1
    },
    {
      id: 'nerds',
      nev: 'Nerds Big Chewy Theater Box 120g',
      image: './assets/cukorImg/Nerds Big Chewy Theater Box 120g.jpg',
      leiras: '',
      ar: 1430,
      darab: 1
    },
    {
      id: 'nerds',
      nev: 'Nerds Frosty Fruit Candy 141g',
      image: './assets/cukorImg/Nerds Frosty Fruit Candy 141g.jpg',
      leiras: '',
      ar: 1690,
      darab: 1
    },
    {
      id: 'nerds',
      nev: 'Wonka Nerds Grape And Strawberry 47g',
      image: './assets/cukorImg/Wonka Nerds Grape And Strawberry 47g.jpg',
      leiras: '',
      ar: 990,
      darab: 1
    },
    {
      id: 'nerds',
      nev: 'Nerds Fruits Candy 142g',
      image: './assets/cukorImg/Nerds Fruits Candy 142g.jpg',
      leiras: '',
      ar: 1490,
      darab: 1
    },
    {
      id: 'nerds',
      nev: 'Nerds Watermelon And Cherry 47g',
      image: './assets/cukorImg/Nerds Watermelon And Cherry 47g.jpg',
      leiras: '',
      ar: 990,
      darab: 1
    },
    {
      id: 'nerds',
      nev: 'Wonka Nerds Rope Rainbow Candy 26g',
      image: './assets/cukorImg/Wonka Nerds Rope Rainbow Candy 26g.jpg',
      leiras: '',
      ar: 990,
      darab: 1
    },
    {
      id: 'skittles',
      nev: 'Skittles Fruits 38g',
      image: './assets/cukorImg/Skittles Fruits 38g.jpg',
      leiras: '',
      ar: 360,
      darab: 1
    },
    {
      id: 'skittles',
      nev: 'Skittles dóza 195g',
      image: './assets/cukorImg/Skittles dóza 195g.jpg',
      leiras: '',
      ar: 3868,
      darab: 1
    },
    {
      id: 'skittles',
      nev: 'Skittles Fruity Tea 40g',
      image: './assets/cukorImg/Skittles Fruity Tea 40g.jpg',
      leiras: '',
      ar: 990,
      darab: 1
    },
    {
      id: 'bazooka',
      nev: 'Bazooka Rattlerz Fruity Share Bag 100g',
      image: './assets/cukorImg/Bazooka Rattlerz Fruity Share Bag 100g.jpg',
      leiras: '',
      ar: 1133,
      darab: 1
    },
    {
      id: 'bazooka',
      nev: 'Bazooka Rattlerz Fruity Bag 40g',
      image: './assets/cukorImg/Bazooka Rattlerz Fruity Bag 40g.jpg',
      leiras: '',
      ar: 304,
      darab: 1
    },
    {
      id: 'bazooka',
      nev: 'Bazooka Rattlerz Fruity Chewy Candies 120g',
      image: './assets/cukorImg/Bazooka Rattlerz Fruity Chewy Candies 120g.jpg',
      leiras: '',
      ar: 1133,
      darab: 1
    },
    {
      id: 'bazooka',
      nev: 'Bazooka Rattlerz Fruity 12x120g',
      image: './assets/cukorImg/Bazooka Rattlerz Fruity 12x120g.jpg',
      leiras: '',
      ar: 4100,
      darab: 1
    },
    {
      id: 'bazooka',
      nev: 'Bazooka Rattlerz Fruity Chewy Candy 10x18g',
      image: './assets/cukorImg/Bazooka Rattlerz Fruity Chewy Candy 10x18g.jpg',
      leiras: '',
      ar: 1200,
      darab: 1
    },
    {
      id: 'bazooka',
      nev: 'Bazooka Juicy Drop Pop 26g',
      image: './assets/cukorImg/Bazooka Juicy Drop Pop 26g.jpg',
      leiras: '',
      ar: 950,
      darab: 1
    },
    {
      id: 'bazooka',
      nev: 'Bazooka Push Pop 15g',
      image: './assets/cukorImg/Bazooka Push Pop 15g.jpg',
      leiras: '',
      ar: 490,
      darab: 1
    },
    {
      id: 'bazooka',
      nev: 'Bazooka Ring Pop 15g',
      image: './assets/cukorImg/Bazooka Ring Pop 15g.jpg',
      leiras: '',
      ar: 390,
      darab: 1
    }
  ];

  constructor(private cartService: CartService) {}
  
    kosarbaRak(i: number) {
      const termek = this.gumicukrok[i];
      this.cartService.addToCart(termek.id, termek.nev, termek.ar);
      console.log(`"${termek.nev}" hozzáadva a kosárhoz.`);
      console.log('Kosár tartalma:', this.cartService.getCartItems());
    }
}
