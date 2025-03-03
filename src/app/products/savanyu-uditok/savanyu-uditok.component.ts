import { Component } from '@angular/core';

interface SavanyuUditok {
  nev: string;
  image: string;
  ar: number;
  darab: number;
}

@Component({
  selector: 'app-uditok',
  templateUrl: './savanyu-uditok.component.html',
  styleUrls: ['./savanyu-uditok.component.css']
})
export class SavanyuUditokComponent {
  uditok: SavanyuUditok[] = [
    {
      nev: 'Arizona Marvel LXR Hero Hydration Lemon Lime 473ml',
      image: './assets/uditokImg/Arizona Marvel LXR Hero Hydration Lemon Lime 473ml.jpg',
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
      nev: 'Fanta Lemon Soda 330ml',
      image: './assets/uditokImg/Fanta Lemon Soda 330ml.jpg',
      ar: 480,
      darab: 1
    },
    {
      nev: 'Fanta Lime 500ml',
      image: './assets/uditokImg/Fanta Lime 500ml.jpg',
      ar: 1280,
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
      nev: 'Ghost Hydration Drink Orange Squeeze 500ml',
      image: './assets/uditokImg/Ghost Hydration Drink Orange Squeeze 500ml.jpg',
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

  kosarbaRak(i: number) {
    const termek = this.uditok[i];
    console.log(`${termek.nev} ${termek.darab} db került a kosárba.`);
  }
}
