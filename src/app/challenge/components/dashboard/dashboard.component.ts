import { Component } from '@angular/core';
import { CardItems, ListItems } from '@shared/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  cards: CardItems[] = [
    {
      image: 'assets/images/unsplash_mwa_nzFpnJw.svg',
      title: 'Natoque penatibus',
      description:
        'Arcu felis bibendum ut tristique et egestas quis ipsum suspendisse.',
      money: '$123.00',
      rating: '5.0',
    },
    {
      image: 'assets/images/unsplash_u79wy47kvVs.svg',
      title: 'Ipsum a arcu',
      description: 'Enim nec dui nunc mattis enim ut tellus. Tincidunt arcu.',
      money: '$123.00',
      rating: '5.0',
    },
    {
      image: 'assets/images/unsplash_tcVH_BwHtrc.svg',
      title: 'Vulputate eu',
      description:
        'Justo laoreet sit amet cursus. Semper viverra nam libero justo laoreet.',
      money: '$123.00',
      rating: '5.0',
    },
  ];

  listItems: ListItems[] = [
    {
      image: 'assets/images/unsplash_CJ6SJO_yR5w.svg',
      money: '$12.34',
      title: 'Dui id ornare arcu',
      tag: 'Zara',
      totalMoney: '$12345.00',
      review: '123K Reviews',
      rating: 4,
      isSale: true,
    },
    {
      image: 'assets/images/unsplash_Q-72wa9-7Dg.svg',
      money: '$12.34',
      title: 'Nulla pellentesque',
      tag: 'H&M',
      totalMoney: '$12345.00',
      review: '123K Reviews',
      rating: 5,
      isSale: false,
    },
    {
      image: 'assets/images/unsplash_pSVYyO-XlJk.svg',
      money: '$12.34',
      title: 'Semper eget',
      tag: 'Zara',
      totalMoney: '$12345.00',
      review: '123K Reviews',
      rating: 3,
      isSale: false,
    },
    {
      image: 'assets/images/unsplash_KStSiM1UvPw.svg',
      money: '$12.34',
      title: 'Vulputate eu',
      tag: 'Nike',
      totalMoney: '$12345.00',
      review: '123K Reviews',
      rating: 2,
      isSale: false,
    },
    {
      image: 'assets/images/unsplash_FlP6C5pkMKs.svg',
      money: '$12.34',
      title: 'Arcu feli',
      tag: 'GAP',
      totalMoney: '$12345.00',
      review: '123K Reviews',
      rating: 4,
      isSale: false,
    },
  ];
}
