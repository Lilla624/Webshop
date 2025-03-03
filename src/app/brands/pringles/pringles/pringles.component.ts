import { Component } from '@angular/core';

interface pringles {
  nev: string;
  image: string;
  ar: number;
  darab: number;
}

@Component({
  selector: 'app-pringles',
  templateUrl: './pringles.component.html',
  styleUrls: ['./pringles.component.css']
})
export class pringlesComponent {
  pringles: pringles[] = [
    {
      nev: 'Pringles Texas BBQ Sauce 165g',
      image: './assets/pringles/Pringles Texas BBQ Sauce 165g.jpg',
      ar: 1049,
      darab: 1
    },
    {
      nev: 'Pringles Paprika 130g',
      image: './assets/pringles/Pringles Paprika 130g.jpg',
      ar: 1049,
      darab: 1
    },
    {
      nev: 'Pringles Original 165g',
      image: './assets/pringles/Pringles Original 165g.jpg',
      ar: 1699,
      darab: 1
    },
    {
      nev: 'Pringles Sour Cream & Onion 165g',
      image: './assets/pringles/Pringles Sour Cream & Onion 165g.jpg',
      ar: 1699,
      darab: 1
    },
    {
      nev: 'Pringles Hot & Spicy 165g',
      image: './assets/pringles/Pringles Hot & Spicy 165g.jpg',
      ar: 1699,
      darab: 1
    },
    {
      nev: 'Pringles Ranch 165g',
      image: './assets/pringles/Pringles Ranch 165g.jpg',
      ar: 1699,
      darab: 1
    },
    {
      nev: 'Pringles Jalapeño 165g',
      image: './assets/pringles/Pringles Jalapeño 165g.jpg',
      ar: 1699,
      darab: 1
    },
    {
      nev: 'Pringles Pizza 165g',
      image: './assets/pringles/Pringles Pizza 165g.jpg',
      ar: 1699,
      darab: 1
    },
    {
      nev: 'Fűszeres Pringles Cheddar Cheese 165g',
      image: './assets/pringles/Pringles Cheddar Cheese 165g.jpg',
      ar: 1699,
      darab: 1
    },
    {
      nev: 'Pringles Scorchin Sour Cream & Onion 165g',
      image: './assets/pringles/Pringles Scorchin Sour Cream & Onion 165g.jpg',
      ar: 1699,
      darab: 1
    },
    {
      nev: 'Pringles Loaded Potato Skins 165g',
      image: './assets/pringles/Pringles Loaded Potato Skins 165g.jpg',
      ar: 1699,
      darab: 1
    }
  ];

  
  kosarbaRak(i: number) {
    const termek = this.pringles[i];
    console.log(`${termek.nev} ${termek.darab} db került a kosárba.`);
    
  }
}
