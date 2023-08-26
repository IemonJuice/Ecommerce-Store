import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetCoordinatesWhenScrollingService {

  constructor() { }

  getCoordinates(elRef: HTMLDivElement, event: any) {

    if (event.pageX + 75 >= window.innerWidth || event.pageX - 75 <= 0 || event.pageY >= 10300 && window.innerWidth < 600 || event.pageY > 5500 && window.innerWidth > 600) {
      elRef.style.display = 'none'
    } else {
      elRef.style.display = 'block'
    }

    if (event.screenY < 180) {
      elRef.style.opacity = '0';
    } else {
      elRef.style.opacity = '1';
      elRef.style.zIndex = '100';

      elRef.style.top = event.pageY + 'px'
      elRef.style.left = event.pageX + 'px'
    }
  }
}
