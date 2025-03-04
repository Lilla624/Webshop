
import { Component } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';

interface Chips {
  id: string;
  nev: string;
  image: string;
  ar: number;
  darab: number;
}

@Component({
  selector: 'app-chipsek',
  templateUrl: './chipsek.component.html',
  styleUrls: ['./chipsek.component.css']
})
export class ChipsekComponent {
  chipsek: Chips[] = [
    {
      id: 'cheetos',
      nev: 'Cheetos Japan Steak Flavor Chips 90g',
      image: './assets/chipsImg/Cheetos Japan Steak Flavor Chips 90g.jpg',
      ar: 1690,
      darab: 1
    },
    {
      id: 'pringles',
      nev: 'Pringles Texas BBQ Sauce 165g',
      image: './assets/chipsImg/Pringles Texas BBQ Sauce 165g.jpg',
      ar: 1049,
      darab: 1
    },
    {
      id: 'pringles',
      nev: 'Pringles Paprika 130g',
      image: './assets/chipsImg/Pringles Paprika 130g.jpg',
      ar: 1049,
      darab: 1
    },
    {
      id: 'pringles',
      nev: 'Pringles Original 165g',
      image: './assets/chipsImg/Pringles Original 165g.jpg',
      ar: 1699,
      darab: 1
    },
    {
      id: 'pringles',
      nev: 'Pringles Sour Cream & Onion 165g',
      image: './assets/chipsImg/Pringles Sour Cream & Onion 165g.jpg',
      ar: 1699,
      darab: 1
    },
    {
      id: 'pringles',
      nev: 'Pringles Hot & Spicy 165g',
      image: './assets/chipsImg/Pringles Hot & Spicy 165g.jpg',
      ar: 1699,
      darab: 1
    },
    {
      id: 'pringles',
      nev: 'Pringles Ranch 165g',
      image: './assets/chipsImg/Pringles Ranch 165g.jpg',
      ar: 1699,
      darab: 1
    },
    {
      id: 'pringles',
      nev: 'Pringles Jalapeño 165g',
      image: './assets/chipsImg/Pringles Jalapeño 165g.jpg',
      ar: 1699,
      darab: 1
    },
    {
      id: 'pringles',
      nev: 'Pringles Pizza 165g',
      image: './assets/chipsImg/Pringles Pizza 165g.jpg',
      ar: 1699,
      darab: 1
    },
    {
      id: 'pringles',
      nev: 'Fűszeres Pringles Cheddar Cheese 165g',
      image: './assets/chipsImg/Pringles Cheddar Cheese 165g.jpg',
      ar: 1699,
      darab: 1
    },
    {
      id: 'pringles',
      nev: 'Pringles Scorchin Sour Cream & Onion 165g',
      image: './assets/chipsImg/Pringles Scorchin Sour Cream & Onion 165g.jpg',
      ar: 1699,
      darab: 1
    },
    {
      id: 'pringles',
      nev: 'Pringles Loaded Potato Skins 165g',
      image: './assets/chipsImg/Pringles Loaded Potato Skins 165g.jpg',
      ar: 1699,
      darab: 1
    },
    {
      id: 'chazz',
      nev: 'Chazz Flaming Ghost Potato Chips 50g',
      image: './assets/chipsImg/Chazz Flaming Ghost Potato Chips 50g.jpg',
      ar: 990,
      darab: 1
    },
    {
      id: 'hot_chip',
      nev: 'Hot Chip Challenge Purple Edition 2,5g',
      image: './assets/chipsImg/Hot Chip Challenge Purple Edition 2,5g.jpg',
      ar: 3690,
      darab: 1
    },
    { id: 'takis',
      nev: 'Takis Blue Heat Spicy Mexican Chips 92g',
      image: './assets/chipsImg/Takis Blue Heat Spicy Mexican Chips 92g.jpg',
      ar: 1990,
      darab: 1
    },
    {
      id: 'takis',
      nev: 'Takis Guacamole Mexico 70g',
      image: './assets/chipsImg/Takis Guacamole Mexico 70g.jpg',
      ar: 1390,
      darab: 1
    },
    { id: 'takis',
      nev: 'Takis Queso Volcano Chips 90g',
      image: './assets/chipsImg/Takis Queso Volcano Chips 90g.jpg',
      ar: 1690,
      darab: 1
    },
    {
      id: 'takis',
      nev: 'Takis Fuego Hot Chips 90g',
      image: './assets/chipsImg/Takis Fuego Hot Chips 90g.jpg',
      ar: 1690,
      darab: 1
    },
    {
      id: 'takis',
      nev: 'Takis Nitro 113g',
      image: './assets/chipsImg/Takis Nitro 113g.jpg',
      ar: 1990,
      darab: 1
    },
    {
      id: 'takis',
      nev: 'Takis Crunchy Fajita 92g',
      image: './assets/chipsImg/Takis Crunchy Fajita 92g.jpg',
      ar: 2363,
      darab: 1
    },
    {
      id: 'takis',
      nev: 'Takis Dragon Sweet Chili 90g',
      image: './assets/chipsImg/Takis Dragon Sweet Chili 90g.jpg',
      ar: 1990,
      darab: 1
    },
    {
      id: 'takis',
      nev: 'Takis Intense Nacho 92g',
      image: './assets/chipsImg/Takis Intense Nacho 92g.jpg',
      ar: 2190,
      darab: 1
    },
    {
      id: 'takis',
      nev: 'Takis Zombie 92g',
      image: './assets/chipsImg/Takis Zombie 92g.jpg',
      ar: 1990,
      darab: 1
    },
    {
      id: 'takis',
      nev: 'Takis Waves Fuego 190g',
      image: './assets/chipsImg/Takis Waves Fuego 190g.jpg',
      ar: 1473,
      darab: 1
    },
    {
      id: 'takis',
      nev: 'Takis Hot Nuts Fuego 90g',
      image: './assets/chipsImg/Takis Hot Nuts Fuego 90g.jpg',
      ar: 1490,
      darab: 1
    },
    {
      id: 'takis',
      nev: 'Takis Stix Fuego 280g',
      image: './assets/chipsImg/Takis Stix Fuego 280g.jpg',
      ar: 1513,
      darab: 1
    },
    {
      id: 'cheetos',
      nev: 'Cheetos Crunchy Cheddar Jalapeño Chips 226g',
      image: './assets/chipsImg/Cheetos Crunchy Cheddar Jalapeño Chips 226g.jpg',
      ar: 1990,
      darab: 1
    },
    {
      id: 'cheetos',
      nev: 'Cheetos Flamin Hot Crunchy 226g',
      image: './assets/chipsImg/Cheetos Flamin Hot Crunchy 226g.jpg',
      ar: 3490,
      darab: 1
    },
    {
      id: 'cheetos',
      nev: 'Cheetos Puffs 226g',
      image: './assets/chipsImg/Cheetos Puffs 226g.jpg',
      ar: 3990,
      darab: 1
    },
    {
      id: 'cheetos',
      nev: 'Cheetos Flamin Hot Puffs 226g',
      image: './assets/chipsImg/Cheetos Flamin Hot Puffs 226g.jpg',
      ar: 3490,
      darab: 1
    },
    {
      id: 'cheetos',
      nev: 'Cheetos Popcorn Cheddar 17g',
      image: './assets/chipsImg/Cheetos Popcorn Cheddar 17g.jpg',
      ar: 3090,
      darab: 1
    },
    {
      id: 'cheetos',
      nev: 'Cheetos Simply Puffs White Cheddar 70g',
      image: './assets/chipsImg/Cheetos Simply Puffs White Cheddar 70g.jpg',
      ar: 4090,
      darab: 1
    },
    {
      id: 'cheetos',
      nev: 'Cheetos Fantastix Chili Cheese 28g',
      image: './assets/chipsImg/Cheetos Fantastix Chili Cheese 28g.jpg',
      ar: 3250,
      darab: 1
    },
    {
      id: 'cheetos',
      nev: 'Cheetos Crunchetos Sweet Chili flavour 110g',
      image: './assets/chipsImg/Cheetos Crunchetos Sweet Chili flavour 110g.jpg',
      ar: 240,
      darab: 1
    },
    {
      id: 'cheetos',
      nev: 'Cheetos Crunchy Xxtra Flamin Hot Cheese Flavored 240g',
      image: './assets/chipsImg/Cheetos Crunchy Xxtra Flamin Hot Cheese Flavored 240g.jpg',
      ar: 7380,
      darab: 1
    },
    {
      id: 'cheetos',
      nev: 'Cheetos Beef and Onions Flavor 40g',
      image: './assets/chipsImg/Cheetos Beef and Onions Flavor 40g.jpg',
      ar: 2330,
      darab: 1
    },
    {
      id: 'cheetos',
      nev: 'Cheetos Big Chipito Sweet Chilli flavour 100g',
      image: './assets/chipsImg/Cheetos Big Chipito Sweet Chilli flavour 100g.jpg',
      ar: 990,
      darab: 1
    }
  ];
  

  constructor(private cartService: CartService) {}

  kosarbaRak(i: number) {
    const termek = this.chipsek[i];
    this.cartService.addToCart(termek.id, termek.nev, termek.ar);
    console.log(`"${termek.nev}" hozzáadva a kosárhoz.`);
    console.log('Kosár tartalma:', this.cartService.getCartItems());
  }
}
