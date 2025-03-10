import { Component } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';

interface Gumicukor {
  id: string;
  nev: string;
  image: string;
  leiras: string;
  ar: number;
  darab: number;
}

@Component({
  selector: 'app-gumicukor',
  templateUrl: './gumicukrok.component.html',
  styleUrls: ['./gumicukrok.component.css']
})
export class GumicukrokComponent {
  gumicukrok: Gumicukor[] = [
    {
      id: 'sour',
      nev: 'Sour Patch Kids Strawberry 102g',
      image: './assets/cukorImg/Sour Patch Kids Strawberry 102g.jpg',
      leiras: '',
      ar: 1290,
      darab: 1
    },
    {
      id: 'sour',
      nev: 'Sour Patch Kids Cola Flavor 130g',
      image: './assets/cukorImg/Sour Patch Kids Cola Flavor 130g.jpg',
      leiras: '',
      ar: 1390,
      darab: 1
    },
    {
      id: 'sour',
      nev: 'Sour Patch Kids Blue Raspberry 102g',
      image: './assets/cukorImg/Sour Patch Kids Blue Raspberry 102g.jpg',
      leiras: '',
      ar: 1190,
      darab: 1
    },
    {
      id: 'sour',
      nev: 'Sour Patch Kids Lemonade Fest 102g',
      image: './assets/cukorImg/Sour Patch Kids Lemonade Fest 102g.jpg',
      leiras: '',
      ar: 1390,
      darab: 1
    },
    {
      id: 'sour',
      nev: 'Sour Patch Kids 99g',
      image: './assets/cukorImg/Sour Patch Kids 99g.jpg',
      leiras: '',
      ar: 1290,
      darab: 1
    },
    {
      id: 'sour',
      nev: 'Sour Patch Kids Extreme 99g',
      image: './assets/cukorImg/Sour Patch Kids Extreme 99g.jpg',
      leiras: '',
      ar: 1290,
      darab: 1
    },
    {
      id: 'sour',
      nev: 'Sour Patch Kids Candy Family Size 816g',
      image: './assets/cukorImg/Sour Patch Kids Candy Family Size 816g.jpg',
      leiras: '',
      ar: 6990,
      darab: 1
    },
    {
      id: 'sour',
      nev: 'Sour Patch Kids Watermelon 130g',
      image: './assets/cukorImg/Sour Patch Kids Watermelon 130g.jpg',
      leiras: '',
      ar: 1790,
      darab: 1
    },
    {
      id: 'sour',
      nev: 'Sour Patch Kids Peach 102g',
      image: './assets/cukorImg/Sour Patch Kids Peach 102g.jpg',
      leiras: '',
      ar: 1190,
      darab: 1
    },
    {
      id: 'sour',
      nev: 'Sour Patch Kids Red White & Blue 87g',
      image: './assets/cukorImg/Sour Patch Kids Red White & Blue 87g.jpg',
      leiras: '',
      ar: 1290,
      darab: 1
    },
    {
      id: 'sour',
      nev: 'Sour Patch Kids Christmas 88g',
      image: './assets/cukorImg/Sour Patch Kids Christmas 88g.jpg',
      leiras: '',
      ar: 1690,
      darab: 1
    },
    {
      id: 'sour',
      nev: 'Sour Patch Kids Fruit Mix 130g',
      image: './assets/cukorImg/Sour Patch Kids Fruit Mix 130g.jpg',
      leiras: '',
      ar: 1490,
      darab: 1
    },
    {
      id: 'sour',
      nev: 'Sour Patch Kids Black Raspberry Sour Hearts 87g',
      image: './assets/cukorImg/Sour Patch Kids Black Raspberry Sour Hearts 87g.jpg',
      leiras: '',
      ar: 1290,
      darab: 1
    },
    {
      id: 'sour',
      nev: 'Sour Patch Kids Original 130g',
      image: './assets/cukorImg/Sour Patch Kids Original 130g.jpg',
      leiras: '',
      ar: 1490,
      darab: 1
    },
    {
      id: 'sour',
      nev: 'Sour Punch Bites Strawberry, Green Apple & Blue Raspberry Sour Gummy Candy 105g',
      image: './assets/cukorImg/Sour Punch Bites Strawberry, Green Apple & Blue Raspberry Sour Gummy Candy 105g.jpg',
      leiras: '',
      ar: 1090,
      darab: 1
    },
    {
      id: 'sour',
      nev: 'Sour Punch Bites Rad Reds Fruity Gummy Candy 142g',
      image: './assets/cukorImg/Sour Punch Bites Rad Reds Fruity Gummy Candy 142g.jpg',
      leiras: '',
      ar: 1390,
      darab: 1
    },
    {
      id: 'sour',
      nev: 'Sour Punch Mini Bites Fruit-Flavored Sour Gummy Candy 56g',
      image: './assets/cukorImg/Sour Punch Mini Bites Fruit-Flavored Sour Gummy Candy 56g.jpg',
      leiras: '',
      ar: 1090,
      darab: 1
    },
    {
      id: 'sour',
      nev: 'Sour Punch Bites Blue Raspberry Sour Gummy Candy 105g',
      image: './assets/cukorImg/Sour Punch Bites Blue Raspberry Sour Gummy Candy 105g.jpg',
      leiras: '',
      ar: 1190,
      darab: 1
    },
    {
      id: 'warheads',
      nev: 'Warheads Care Bears Sour Grumpy Bears 99g',
      image: './assets/cukorImg/Warheads Care Bears Sour Grumpy Bears 99g.jpg',
      leiras: '',
      ar: 1490,
      darab: 1
    },
    {
      id: 'warheads',
      nev: 'Warheads Galactic Mix Cubes 127g',
      image: './assets/cukorImg/Warheads Galactic Mix Cubes 127g.jpg',
      leiras: '',
      ar: 1990,
      darab: 1
    },
    {
      id: 'warheads',
      nev: 'Warheads Ooze Chewz Sour Filled Candy 99g',
      image: './assets/cukorImg/Warheads Ooze Chewz Sour Filled Candy 99g.jpg',
      leiras: '',
      ar: 1390,
      darab: 1
    },
    {
      id: 'warheads',
      nev: 'Warheads Wedgies Sour Chewy Candy 99g',
      image: './assets/cukorImg/Warheads Wedgies Sour Chewy Candy 99g.jpg',
      leiras: '',
      ar: 1290,
      darab: 1
    },
    {
      id: 'warheads',
      nev: 'Warheads Sour Worms 99g',
      image: './assets/cukorImg/Warheads Sour Worms 99g.jpg',
      leiras: '',
      ar: 1390,
      darab: 1
    },
    {
      id: 'warheads',
      nev: 'Warheads Sour Cubes Sour Gummies 113g',
      image: './assets/cukorImg/Warheads Sour Cubes Sour Gummies 113g.jpg',
      leiras: '',
      ar: 1390,
      darab: 1
    },
    {
      id: 'warheads',
      nev: 'WarHeads Chewy Cubes Galactic Mix 99g',
      image: './assets/cukorImg/WarHeads Chewy Cubes Galactic Mix 99g.jpg',
      leiras: '',
      ar: 1390,
      darab: 1
    },
    {
      id: 'warheads',
      nev: 'Warheads Sour Cubes Berry Mix 99g',
      image: './assets/cukorImg/Warheads Sour Cubes Berry Mix 99g.jpg',
      leiras: '',
      ar: 1490,
      darab: 1
    },
    {
      id: 'warheads',
      nev: 'Warheads Extreme Sour Hard Candy 92g',
      image: './assets/cukorImg/Warheads Extreme Sour Hard Candy 92g.jpg',
      leiras: '',
      ar: 1490,
      darab: 1
    },
    {
      id: 'warheads',
      nev: 'Warheads Jelly Beans Sour Candy 113g',
      image: './assets/cukorImg/Warheads Jelly Beans Sour Candy 113g.jpg',
      leiras: '',
      ar: 1090,
      darab: 1
    },
    {
      id: 'warheads',
      nev: 'Warheads Cubes 141g',
      image: './assets/cukorImg/Warheads Cubes 141g.jpg',
      leiras: '',
      ar: 1690,
      darab: 1
    },
    {
      id: 'warheads',
      nev: 'Warheads Cubes 99g',
      image: './assets/cukorImg/Warheads Cubes 99g.jpg',
      leiras: '',
      ar: 1490,
      darab: 1
    },
    {
      id: 'warheads',
      nev: 'Warheads Mega Sour Bombs 71g',
      image: './assets/cukorImg/Warheads Mega Sour Bombs 71g.jpg',
      leiras: '',
      ar: 1690,
      darab: 1
    },
    {
      id: 'warheads',
      nev: 'Warheads Sour Ooze Chewz Ropes Bag 85g',
      image: './assets/cukorImg/Warheads Sour Ooze Chewz Ropes Bag 85g.jpg',
      leiras: '',
      ar: 1490,
      darab: 1
    },
    {
      id: 'warheads',
      nev: 'Warheads Blue Raspberry Cubes 99g',
      image: './assets/cukorImg/Warheads Blue Raspberry Cubes 99g.jpg',
      leiras: '',
      ar: 1390,
      darab: 1
    },
    {
      id: 'warheads',
      nev: 'Warheads Extreme Sour Hard Candy 57g',
      image: './assets/cukorImg/Warheads Extreme Sour Hard Candy 57g.jpg',
      leiras: '',
      ar: 1390,
      darab: 1
    },
    {
      id: 'warheads',
      nev: 'Warheads Dipping Lollipop with Sour Powder 42g',
      image: './assets/cukorImg/Warheads Dipping Lollipop with Sour Powder 42g.jpg',
      leiras: '',
      ar: 690,
      darab: 1
    },
    {
      id: 'warheads',
      nev: 'Warheads Extreme Sour Extra Sour Candy Assorted Flavors 4g',
      image: './assets/cukorImg/Warheads Extreme Sour Extra Sour Candy Assorted Flavors 4g.jpg',
      leiras: '',
      ar: 99,
      darab: 1
    },
    {
      id: 'bazooka',
      nev: 'Bazooka Rattlerz Sour Chewy Candy 40g',
      image: './assets/cukorImg/Bazooka Rattlerz Sour Chewy Candy 40g.jpg',
      leiras: '',
      ar: 563,
      darab: 1
    },
    {
      id: 'bazooka',
      nev: 'Bazooka Rattlerz Melting Fruity Candy 40g',
      image: './assets/cukorImg/Bazooka Rattlerz Melting Fruity Candy 40g.jpg',
      leiras: '',
      ar: 563,
      darab: 1
    },
    {
      id: 'toxic',
      nev: 'Toxic Waste Worms Sour Gummy 85g',
      image: './assets/cukorImg/Toxic Waste Worms Sour Gummy 85g.jpg',
      leiras: '',
      ar: 1490,
      darab: 1
    },
    {
      id: 'toxic',
      nev: 'Toxic Waste Worms Sour Gummy 142g',
      image: './assets/cukorImg/Toxic Waste Worms Sour Gummy 142g.jpg',
      leiras: '',
      ar: 1290,
      darab: 1
    },
    {
      id: 'toxic',
      nev: 'Toxic Waste Nuclear Fusion Sour Candy 57g',
      image: './assets/cukorImg/Toxic Waste Nuclear Fusion Sour Candy 57g.jpg',
      leiras: '',
      ar: 1190,
      darab: 1
    },
    {
      id: 'toxic',
      nev: 'Toxic Waste Sour Smog Balls 85g',
      image: './assets/cukorImg/Toxic Waste Sour Smog Balls 85g.jpg',
      leiras: '',
      ar: 1490,
      darab: 1
    },
    {
      id: 'toxic',
      nev: 'Toxic Waste Smog Balls Sour Candy 48g',
      image: './assets/cukorImg/Toxic Waste Smog Balls Sour Candy 48g.jpg',
      leiras: '',
      ar: 790,
      darab: 1
    },
    {
      id: 'toxic',
      nev: 'Toxic Waste Atomic Bytes Sour Hard Candy 60g',
      image: './assets/cukorImg/Toxic Waste Atomic Bytes Sour Hard Candy 60g.jpg',
      leiras: '',
      ar: 590,
      darab: 1
    },
    {
      id: 'toxic',
      nev: 'Toxic Waste Yellow Drum Extreme Sour Candy 42g',
      image: './assets/cukorImg/Toxic Waste Yellow Drum Extreme Sour Candy 42g.jpg',
      leiras: '',
      ar: 790,
      darab: 1
    },
    {
      id: 'toxic',
      nev: 'Toxic Waste Green Drum Extreme Sour Candy 42g',
      image: './assets/cukorImg/Toxic Waste Green Drum Extreme Sour Candy 42g.jpg',
      leiras: '',
      ar: 790,
      darab: 1
    },
    {
      id: 'toxic',
      nev: 'Toxic Waste Red Drum Extreme Sour Candy 42g',
      image: './assets/cukorImg/Toxic Waste Red Drum Extreme Sour Candy 42g.jpg',
      leiras: '',
      ar: 790,
      darab: 1
    },
    {
      id: 'toxic',
      nev: 'Toxic Waste Purple Drum Extreme Sour Candy 42g',
      image: './assets/cukorImg/Toxic Waste Purple Drum Extreme Sour Candy 42g.jpg',
      leiras: '',
      ar: 790,
      darab: 1
    },
    {
      id: 'toxic',
      nev: 'Toxic Waste Nuclear Sludge Chew Bar Sour Green Apple 20g',
      image: './assets/cukorImg/Toxic Waste Nuclear Sludge Chew Bar Sour Green Apple 20g.jpg',
      leiras: '',
      ar: 199,
      darab: 1
    },
    {
      id: 'toxic',
      nev: 'Toxic Waste Blue Raspberry Flavored Chewy Candy 20g',
      image: './assets/cukorImg/Toxic Waste Blue Raspberry Flavored Chewy Candy 20g.jpg',
      leiras: '',
      ar: 199,
      darab: 1
    },
    {
      id: 'vanholten',
      nev: 'Van Holten’s Hot Mama Pickle Jumbo 306g',
      image: './assets/cukorImg/Van Holten’s Hot Mama Pickle Jumbo 306g.jpg',
      leiras: '',
      ar: 1390,
      darab: 1
    },
    {
      id: 'vanholten',
      nev: 'Van Holten’s Sour Sis Pickle Jumbo 306g',
      image: './assets/cukorImg/Van Holten’s Sour Sis Pickle Jumbo 306g.jpg',
      leiras: '',
      ar: 1390,
      darab: 1
    },
    {
      id: 'vanholten',
      nev: 'Van Holten’s Big Papa Pickle Jumbo 306g',
      image: './assets/cukorImg/Van Holten’s Big Papa Pickle Jumbo 306g.jpg',
      leiras: '',
      ar: 1390,
      darab: 1
    },
    {
      id: 'vanholten',
      nev: 'Van Holten’s Garlic Joe Pickle Jumbo 306g',
      image: './assets/cukorImg/Van Holten’s Garlic Joe Pickle Jumbo 306g.jpg',
      leiras: '',
      ar: 1390,
      darab: 1
    },
    {
      id: 'vanholten',
      nev: 'Van Holten’s Pickle Rick & Morty uborka 306g',
      image: './assets/cukorImg/Van Holten’s Pickle Rick & Morty uborka 306g.jpg',
      leiras: '',
      ar: 1390,
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
      nev: 'Skittles Crazy Sours 38g',
      image: './assets/cukorImg/Skittles Crazy Sours 38g.jpg',
      leiras: '',
      ar: 299,
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
      nev: 'Skittles Crazy Sours 136g',
      image: './assets/cukorImg/Skittles Crazy Sours 136g.jpg',
      leiras: '',
      ar: 980,
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
      nev: 'Bazooka Rattlerz Sour Share Bag 120g',
      image: './assets/cukorImg/Bazooka Rattlerz Sour Share Bag 120g.jpg',
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
      nev: 'Bazooka Rattlerz Sour Chewy Candies 120g',
      image: './assets/cukorImg/Bazooka Rattlerz Sour Chewy Candies 120g.jpg',
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
