import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'The Cutest Puppies';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://petlandstl.com/wp-content/uploads/2022/11/2573693_800.jpg';
  image3 = 'https://i.pinimg.com/originals/c2/94/c9/c294c91a09f20d65bc2fc822e47adb89.png';

  constructor() { }

  ngOnInit() {
  }

}