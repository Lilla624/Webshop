import { Component } from '@angular/core';

interface Uditok {
  nev: string;
  image: string;
  ar: number;
  darab: number;
}

@Component({
  selector: 'app-uditok',
  templateUrl: './uditok.component.html',
  styleUrls: ['./uditok.component.css']
})
export class UditokComponent {
  gumicukrok: Uditok[] = [
    {
      nev: 'Prime Hydration Drink Glowberry 500ml',
      image: './assets/uditokImg/Prime Hydration Drink Glowberry 500ml.jpg',
      ar: 3990,
      darab: 1
    },
    {
      nev: 'Prime Hydration Drink Strawberry Watermelon 500ml',
      image: './assets/uditokImg/Prime Hydration Drink Strawberry Watermelon 500ml.jpg',
      ar: 1490,
      darab: 1
    },
    {
      nev: 'Prime Hydration Drink Ice Pop 500ml',
      image: './assets/uditokImg/Prime Hydration Drink Ice Pop 500ml.jpg',
      ar: 1790,
      darab: 1
    },
    {
      nev: 'Prime Hydration Drink Blue Raspberry 500ml',
      image: './assets/uditokImg/Prime Hydration Drink Blue Raspberry 500ml.jpg',
      ar: 990,
      darab: 1
    },
    {
      nev: 'Prime Hydration Drink Lemon Lime 500ml',
      image: './assets/uditokImg/Prime Hydration Drink Lemon Lime 500ml.jpg',
      ar: 990,
      darab: 1
    },
    {
      nev: 'Prime Hydration Drink Grape 500ml',
      image: './assets/uditokImg/Prime Hydration Drink Grape 500ml.jpg',
      ar: 990,
      darab: 1
    },
    {
      nev: 'Prime Hydration Drink UFC 300 500ml',
      image: './assets/uditokImg/Prime Hydration Drink UFC 300 500ml.jpg',
      ar: 4990,
      darab: 1
    },
    {
      nev: 'Prime Hydration Drink Strawberry Banana 500ml',
      image: './assets/uditokImg/Prime Hydration Drink Strawberry Banana 500ml.jpg',
      ar: 4990,
      darab: 1
    },
    {
      nev: 'Prime Hydration Drink Auston Matthews 500ml',
      image: './assets/uditokImg/Prime Hydration Drink Auston Matthews 500ml.jpg',
      ar: 3990,
      darab: 1
    },
    {
      nev: 'Prime Hydration Drink WWE 500ml',
      image: './assets/uditokImg/Prime Hydration Drink WWE 500ml.jpg',
      ar: 3790,
      darab: 1
    },
    {
      nev: 'Prime Hydration Drink Toronto Raptors Black 500ml',
      image: './assets/uditokImg/Prime Hydration Drink Toronto Raptors Black 500ml.jpg',
      ar: 3990,
      darab: 1
    },
    {
      nev: 'Prime Hydration Drink Central Cee 500ml',
      image: './assets/uditokImg/Prime Hydration Drink Central Cee 500ml.jpg',
      ar: 3490,
      darab: 1
    },
    {
      nev: 'Prime Hydration Drink LAKERS 500ml',
      image: './assets/uditokImg/Prime Hydration Drink LAKERS 500ml.jpg',
      ar: 4590,
      darab: 1
    },
    {
      nev: 'Prime Hydration Drink Kevin Durant 500ml',
      image: './assets/uditokImg/Prime Hydration Drink Kevin Durant 500ml.jpg',
      ar: 4590,
      darab: 1
    },
    {
      nev: 'Prime Hydration Drink Barcelona 500ml',
      image: './assets/uditokImg/Prime Hydration Drink Barcelona 500ml.jpg',
      ar: 3490,
      darab: 1
    },
    {
      nev: 'Prime Hydration Drink Meta Moon 500ml',
      image: './assets/uditokImg/Prime Hydration Drink Meta Moon 500ml.jpg',
      ar: 1790,
      darab: 1
    },
    {
      nev: 'Arizona Marvel LXR Hero Hydration Lemon Lime 473ml',
      image: './assets/uditokImg/Arizona Marvel LXR Hero Hydration Lemon Lime 473ml.jpg',
      ar: 2200,
      darab: 1
    },
    {
      nev: 'Arizona Marvel LXR Hero Hydration Peach Mango 473ml',
      image: './assets/uditokImg/Arizona Marvel LXR Hero Hydration Peach Mango 473ml.jpg',
      ar: 2200,
      darab: 1
    },
    {
      nev: 'WarHeads Sour Black Cherry Soda 355ml',
      image: './assets/uditokImg/WarHeads Sour Black Cherry Soda 355ml.jpg',
      ar: 990,
      darab: 1
    },
    {
      nev: 'Warheads Blue Raspberry Soda 355ml',
      image: './assets/uditokImg/Warheads Blue Raspberry Soda 355ml.jpg',
      ar: 990,
      darab: 1
    },
    {
      nev: 'WarHeads Sour Green Apple Soda 355ml',
      image: './assets/uditokImg/WarHeads Sour Green Apple Soda 355ml.jpg',
      ar: 990,
      darab: 1
    },
    {
      nev: 'Warheads Sour Watermelon Soda 355ml',
      image: './assets/uditokImg/Warheads Sour Watermelon Soda 355ml.jpg',
      ar: 990,
      darab: 1
    },
    {
      nev: 'Warheads Sour peach soda 355ml',
      image: './assets/uditokImg/Warheads Sour peach soda 355ml.jpg',
      ar: 990,
      darab: 1
    },
    {
      nev: 'Fanta Berry 355ml',
      image: './assets/uditokImg/Fanta Berry 355ml.jpg',
      ar: 680,
      darab: 1
    },
    {
      nev: 'Fanta Fruit Twist 330ml',
      image: './assets/uditokImg/Fanta Fruit Twist 330ml.jpg',
      ar: 690,
      darab: 1
    },
    {
      nev: 'Fanta Grape 355ml',
      image: './assets/uditokImg/Fanta Grape 355ml.jpg',
      ar: 680,
      darab: 1
    },
    {
      nev: 'Fanta Strawberry 350ml',
      image: './assets/uditokImg/Fanta Strawberry 350ml.jpg',
      ar: 680,
      darab: 1
    },
    {
      nev: 'Fanta Peach 355ml',
      image: './assets/uditokImg/Fanta Peach 355ml.jpg',
      ar: 680,
      darab: 1
    },
    {
      nev: 'Fanta Strawberry Kiwi Soda 330ml',
      image: './assets/uditokImg/Fanta Strawberry Kiwi Soda 330ml.jpg',
      ar: 480,
      darab: 1
    },
    {
      nev: 'Fanta Lemon Soda 330ml',
      image: './assets/uditokImg/Fanta Lemon Soda 330ml.jpg',
      ar: 480,
      darab: 1
    },
    {
      nev: 'Fanta Exotic 330ml',
      image: './assets/uditokImg/Fanta Exotic 330ml.jpg',
      ar: 480,
      darab: 1
    },
    {
      nev: 'Fanta Pineapple Soda 355ml',
      image: './assets/uditokImg/Fanta Pineapple Soda 355ml.jpg',
      ar: 680,
      darab: 1
    },
    {
      nev: 'Skittles Drink Original 414ml',
      image: './assets/uditokImg/Skittles Drink Original 414ml.jpg',
      ar: 1780,
      darab: 1
    },
    {
      nev: 'Skittles Drink Wild Berry 414ml',
      image: './assets/uditokImg/Skittles Drink Wild Berry 414ml.jpg',
      ar: 1790,
      darab: 1
    },
    {
      nev: 'Skittles Drink Tropical 414ml',
      image: './assets/uditokImg/Skittles Drink Tropical 414ml.jpg',
      ar: 1790,
      darab: 1
    },
    {
      nev: 'Skittles Drink Sour 414ml',
      image: './assets/uditokImg/Skittles Drink Sour 414ml.jpg',
      ar: 1790,
      darab: 1
    },
    {
      nev: 'Ghost Hydration Drink Sour Patch Kids 500ml',
      image: './assets/uditokImg/Ghost Hydration Drink Sour Patch Kids 500ml.jpg',
      ar: 2990,
      darab: 1
    },
    {
      nev: 'Fanta Lime 500ml',
      image: './assets/uditokImg/Fanta Lime 500ml.jpg',
      ar: 1280,
      darab: 1
    },
    {
      nev: 'Fanta Green Apple 185ml',
      image: './assets/uditokImg/Fanta Green Apple 185ml.jpg',
      ar: 1290,
      darab: 1
    },
    {
      nev: 'Chinese Fanta White Peach 330ml',
      image: './assets/uditokImg/Chinese Fanta White Peach 330ml.jpg',
      ar: 790,
      darab: 1
    },
    {
      nev: 'Skittles Tropical Liquid Water Enhancer 48ml',
      image: './assets/uditokImg/Skittles Tropical Liquid Water Enhancer 48ml.jpg',
      ar: 4510,
      darab: 1
    },
    {
      nev: 'Skittles Tropical Punch flavored drink powder, 6-pack',
      image: './assets/uditokImg/Skittles Tropical Punch flavored drink powder, 6-pack.jpg',
      ar: 1416,
      darab: 1
    },
    {
      nev: 'Skittles Wild Berry Water Enhancer 48ml',
      image: './assets/uditokImg/Skittles Wild Berry Water Enhancer 48ml.jpg',
      ar: 2573,
      darab: 1
    },
    {
      nev: 'Arizona Cherry Lime Rickey 650ml',
      image: './assets/uditokImg/Arizona Cherry Lime Rickey 650ml.jpg',
      ar: 990,
      darab: 1
    },
    {
      nev: 'Arizona Frost Chillzicle 650ml',
      image: './assets/uditokImg/Arizona Frost Chillzicle 650ml.jpg',
      ar: 990,
      darab: 1
    },
    {
      nev: 'Arizona Green Tea with Ginseng and Honey 650ml',
      image: './assets/uditokImg/Arizona Green Tea with Ginseng and Honey 650ml.jpg',
      ar: 990,
      darab: 1
    },
    {
      nev: 'Arizona Arnold Palmer Half & Half Iced Tea Lemonade 650ml',
      image: './assets/uditokImg/Arizona Arnold Palmer Half & Half Iced Tea Lemonade 650ml.jpg',
      ar: 990,
      darab: 1
    },
    {
      nev: 'Arizona Mucho Mango 650ml',
      image: './assets/uditokImg/Arizona Mucho Mango 650ml.jpg',
      ar: 990,
      darab: 1
    },
    {
      nev: 'Arizona Watermelon 650ml',
      image: './assets/uditokImg/Arizona Watermelon 650ml.jpg',
      ar: 990,
      darab: 1
    },
    {
      nev: 'Arizona Fruit Punch 650ml',
      image: './assets/uditokImg/Arizona Fruit Punch 650ml.jpg',
      ar: 990,
      darab: 1
    },
    {
      nev: 'Arizona Blueberry White Tea 500ml',
      image: './assets/uditokImg/Arizona Blueberry White Tea 500ml.jpg',
      ar: 990,
      darab: 1
    },
    {
      nev: 'Arizona Pomegranate Green Tea 500ml',
      image: './assets/uditokImg/Arizona Pomegranate Green Tea 500ml.jpg',
      ar: 990,
      darab: 1
    },
    {
      nev: 'Arizona Cowboy Cocktail Kiwi Strawberry 500ml',
      image: './assets/uditokImg/Arizona Cowboy Cocktail Kiwi Strawberry 500ml.jpg',
      ar: 990,
      darab: 1
    },
    {
      nev: 'Ghost Hydration Drink Orange Squeeze 500ml',
      image: './assets/uditokImg/Ghost Hydration Drink Orange Squeeze 500ml.jpg',
      ar: 7411,
      darab: 1
    },
    {
      nev: 'Ghost Hydration Drink Kiwi Strawberry 500ml',
      image: './assets/uditokImg/Ghost Hydration Drink Kiwi Strawberry 500ml.jpg',
      ar: 7411,
      darab: 1
    },
    {
      nev: 'Ghost Hydration Drink Lemon Lime 500ml',
      image: './assets/uditokImg/Ghost Hydration Drink Lemon Lime 500ml.jpg',
      ar: 7411,
      darab: 1
    },
    {
      nev: 'Ghost Hydration Drink Blue Raspberry 500ml',
      image: './assets/uditokImg/Ghost Hydration Drink Blue Raspberry 500ml.jpg',
      ar: 7411,
      darab: 1
    },
    {
      nev: 'Ghost Hydration Drink Lemon Crush 500ml',
      image: './assets/uditokImg/Ghost Hydration Drink Lemon Crush 500ml.jpg',
      ar: 7411,
      darab: 1
    },
    {
      nev: 'Ghost Hydration Drink Tropical Mango 500ml',
      image: './assets/uditokImg/Ghost Hydration Drink Tropical Mango 500ml.jpg',
      ar: 7411,
      darab: 1
    },
    {
      nev: 'Ghost Hydration Drink Cherry Limeade 500ml',
      image: './assets/uditokImg/Ghost Hydration Drink Cherry Limeade 500ml.jpg',
      ar: 7411,
      darab: 1
    },
    {
      nev: 'Ghost Hydration Drink Citrus 500ml',
      image: './assets/uditokImg/Ghost Hydration Drink Citrus 500ml.jpg',
      ar: 7411,
      darab: 1
    },
    {
      nev: 'Ghost Hydration Drink Orange Cream 500ml',
      image: './assets/uditokImg/Ghost Hydration Drink Orange Cream 500ml.jpg',
      ar: 7411,
      darab: 1
    },
    {
      nev: 'Ghost Hydration Drink Sour Pink Lemonade 500ml',
      image: './assets/uditokImg/Ghost Hydration Drink Sour Pink Lemonade 500ml.jpg',
      ar: 7411,
      darab: 1
    },
    {
      nev: 'Ghost Energy Drink, Warheads Sour Watermelon 500ml',
      image: './assets/uditokImg/Ghost Energy Drink, Warheads Sour Watermelon 500ml.jpg',
      ar: 7411,
      darab: 1
    }
  ];
  uditok: any;

  kosarbaRak(i: number) {
    const termek = this.uditok[i];
    console.log(`${termek.nev} ${termek.darab} db került a kosárba.`);
  }
}
