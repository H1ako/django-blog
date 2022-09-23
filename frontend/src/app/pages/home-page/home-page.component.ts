import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  posts: IPost[] = [
    {
      id: 1,
      name: 'Best Games of 2022',
      description: '2022 was interesting. There are many games that were awarded and i want to tell you guys about them. Here...',
      smallDescription: '2022 was interesting. There are many games that were awarded and i want to tell you guys about them. Here...',
      author: {
        id: 1,
        name: 'Sobolev Nikita',
        pic: ''
      },
      thumbnail: 'https://via.placeholder.com/640x360',
      created_at: '10.10.10',
      updated_at: '10.10.10',
      link: 'best-games-2022',
      fullLink: '/posts/best-games/2022',
      isFavourite: true,
      comments: []
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
