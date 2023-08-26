import {Component, OnInit} from '@angular/core';
// @ts-ignore
import {SwiperOptions} from 'swiper';

import {AngularFirestore} from "@angular/fire/firestore";




@Component({
  selector: 'app-swiper-section',
  templateUrl: './swiper-section.component.html',
  styleUrls: ['./swiper-section.component.scss']
})
export class SwiperSectionComponent implements OnInit{
  config: SwiperOptions = {
    pagination: {el: '.swiper-pagination', clickable: true},
    autoHeight: true,
    initialSlide:2,
    allowTouchMove: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: true
    },
    breakpoints: {
      1024: {
        slidesPerView: 3
      },
      500: {
        slidesPerView: 2
      },
      400: {
        slidesPerView: 1
      },
      300: {
        slidesPerView: 1
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    loop: false
  };
photos:any[] = []
  constructor(private db: AngularFirestore) {

  }
  ngOnInit(){
  this.db.collection('/catalog/chair/chairs').valueChanges().subscribe((data)=>{
    this.photos = data
  })
  }


}
