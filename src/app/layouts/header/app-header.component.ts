import {
  AfterContentChecked,
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';
import {CatalogParameterService} from "../../catalog-parameter.service";
import {GetProductsQuantityService} from "../../services/app-get-products-quantity.service";


@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],

})
export class AppHeaderComponent implements AfterContentChecked {

  @ViewChild('navBar', {static: true}) navBar!: ElementRef;
  @ViewChild('toggle_menu', {static: true}) toggle_menu!: ElementRef;
  @ViewChild('ClassicDropDownMenu', {static: true}) ClassicDropDownMenu!: ElementRef;
  @ViewChild('PremiumDropDownMenu', {static: true}) PremiumDropDownMenu!: ElementRef;
  @ViewChild('DecorDropDownMenu', {static: true}) DecorDropDownMenu!: ElementRef;
  @ViewChild('htmlImageElement1', {static: false}) htmlImageElement1!: ElementRef;
  @ViewChild('imageElement2', {static: false}) imageElement2!: ElementRef;
  @ViewChild('PremiumProducts', {static: false}) PremiumProducts!: ElementRef;
  @ViewChild('ClassicProducts', {static: false}) ClassicProducts!: ElementRef;
  @ViewChild('DecorProducts', {static: false}) DecorProducts!: ElementRef;


  quantity: any = 0;
  PremiumDropDownMenuIsVisible: boolean = false
  DecorDropDownMenuIsVisible: boolean = false
  ClassicDropDownMenuIsVisible: boolean = false

  constructor(private catalogParametr: CatalogParameterService, private GetProdQuantity: GetProductsQuantityService) {
    this.setParameter('chair');
  }


  ngAfterContentChecked() {
    this.quantity = this.GetProdQuantity.getQuantity(this.quantity)
  }

  getBurger() {
    this.navBar.nativeElement.classList.toggle('toggle')
  }

  setParameter(parameter: string): void {
    this.catalogParametr.setData(parameter);
  }

  showClassicDropDownMenu() {

    if (this.ClassicDropDownMenuIsVisible) {
      this.ClassicDropDownMenu.nativeElement.style = 'opacity:0; margin-top:-650px; transition-duration: 0.5s;'
      this.ClassicDropDownMenuIsVisible = false
    } else {
      this.ClassicDropDownMenu.nativeElement.style = 'opacity:1;margin-top:510px;'
      this.PremiumDropDownMenu.nativeElement.style = 'opacity:0;  transition-duration: 0.5s;'
      this.DecorDropDownMenu.nativeElement.style = 'opacity:0;  transition-duration: 0.5s;'
      this.ClassicDropDownMenuIsVisible = true
      this.DecorDropDownMenuIsVisible = false
      this.PremiumDropDownMenuIsVisible = false
    }
  }

  showPremiumDropDownMenu() {

    if (this.PremiumDropDownMenuIsVisible) {
      this.PremiumDropDownMenu.nativeElement.style = 'opacity:0; margin-top:-650px; transition-duration: 0.5s;'
      this.PremiumDropDownMenuIsVisible = false
    } else {
      this.PremiumDropDownMenuIsVisible = true
      this.DecorDropDownMenuIsVisible = false
      this.ClassicDropDownMenuIsVisible = false
      this.PremiumDropDownMenu.nativeElement.style = 'opacity:1;margin-top:510px;'
      this.ClassicDropDownMenu.nativeElement.style = 'opacity:0; transition-duration: 0.5s;'
      this.DecorDropDownMenu.nativeElement.style = 'opacity:0; transition-duration: 0.5s;'
    }
  }

  showDecorDropDownMenu() {
    if (this.DecorDropDownMenuIsVisible) {
      this.DecorDropDownMenu.nativeElement.style = 'opacity:0; margin-top:-650px; transition-duration: 0.5s;';
      this.DecorDropDownMenuIsVisible = false
    } else {
      this.DecorDropDownMenuIsVisible = true
      this.PremiumDropDownMenuIsVisible = false
      this.ClassicDropDownMenuIsVisible = false
      this.DecorDropDownMenu.nativeElement.style = 'opacity:1;margin-top:510px;'
      this.PremiumDropDownMenu.nativeElement.style = 'opacity:0; transition-duration: 0.5s;'
      this.ClassicDropDownMenu.nativeElement.style = 'opacity:0; transition-duration: 0.5s;'
    }
  }

  changeNavImage(e: any) {
    let element = e.target as HTMLAnchorElement
    if (element.innerText === 'Стільці') {
      this.htmlImageElement1.nativeElement.style = 'opacity:0;width:430px;height:330px;object-fit:cover';
      this.imageElement2.nativeElement.style = 'opacity:0;width:430px;height:330px;object-fit:cover';

      setTimeout(() => {
        this.htmlImageElement1.nativeElement.src = './assets/647433fefedd584088f2fbdb9081b279.jpg'
        this.imageElement2.nativeElement.src = './assets/647433fefedd584088f2fbdb9081b279.jpg'
        this.htmlImageElement1.nativeElement.style = 'opacity:1;width:430px;height:330px;object-fit:cover';
        this.imageElement2.nativeElement.style = 'opacity:1;width:430px;height:330px;object-fit:cover';
      }, 500)
    } else if (element.innerText === 'Столи') {
      this.htmlImageElement1.nativeElement.style = 'opacity:0;width:430px;height:330px;object-fit:cover';
      this.imageElement2.nativeElement.style = 'opacity:0;width:430px;height:330px;object-fit:cover';
      setTimeout(() => {
        this.htmlImageElement1.nativeElement.src = './assets/Minimalist Rock Board Dining Table.jpg'
        this.imageElement2.nativeElement.src = './assets/Minimalist Rock Board Dining Table.jpg'
        this.htmlImageElement1.nativeElement.style = 'opacity:1;width:430px;height:330px;object-fit:cover';
        this.imageElement2.nativeElement.style = 'opacity:1;width:430px;height:330px;object-fit:cover';
      }, 500)
//'
    } else if (element.innerText === 'Шкафи') {
      this.htmlImageElement1.nativeElement.style = 'opacity:0;width:430px;height:330px;object-fit:cover';
      this.imageElement2.nativeElement.style = 'opacity:0;width:430px;height:330px;object-fit:cover';
      setTimeout(() => {
        this.htmlImageElement1.nativeElement.style = 'opacity:1;width:430px;height:330px;object-fit:cover';
        this.imageElement2.nativeElement.style = 'opacity:1;width:430px;height:330px;object-fit:cover';
        this.htmlImageElement1.nativeElement.src = './assets/GettyImages-1255939886-be0a617ba3c14ed19d0200a4022c5bc4.jpg'
        this.imageElement2.nativeElement.src = './assets/GettyImages-1255939886-be0a617ba3c14ed19d0200a4022c5bc4.jpg'
      }, 500)

    } else if (element.innerText === 'Шухляди') {
      this.htmlImageElement1.nativeElement.style = 'opacity:0;width:430px;height:330px;object-fit:cover';
      this.imageElement2.nativeElement.style = 'opacity:0;width:430px;height:330px;object-fit:cover';
      setTimeout(() => {
        this.htmlImageElement1.nativeElement.style = 'opacity:1;width:430px;height:330px;object-fit:cover';
        this.imageElement2.nativeElement.style = 'opacity:1;width:430px;height:330px;object-fit:cover';
        this.htmlImageElement1.nativeElement.src = './assets/298198060_5380864421990252_2921041185529120802_n.jpg'
        this.imageElement2.nativeElement.src = './assets/298198060_5380864421990252_2921041185529120802_n.jpg'
      }, 500)

    } else if (element.innerText === 'Гардероб') {
      this.htmlImageElement1.nativeElement.style = 'opacity:0;width:430px;height:330px;object-fit:cover';
      this.imageElement2.nativeElement.style = 'opacity:0;width:430px;height:330px;object-fit:cover';
      setTimeout(() => {
        this.htmlImageElement1.nativeElement.style = 'opacity:1;width:430px;height:330px;object-fit:cover';
        this.imageElement2.nativeElement.style = 'opacity:1;width:430px;height:330px;object-fit:cover';
        this.htmlImageElement1.nativeElement.src = './assets/16 Stunning Decor Items Under ₹1700 For A Stylish Space.jpg'
        this.imageElement2.nativeElement.src = './assets/16 Stunning Decor Items Under ₹1700 For A Stylish Space.jpg'
      }, 500)

    } else if (element.innerText === 'Догляд') {
      this.htmlImageElement1.nativeElement.style = 'opacity:0;width:430px;height:330px;object-fit:cover';
      this.imageElement2.nativeElement.style = 'opacity:0;width:430px;height:330px;object-fit:cover';
      setTimeout(() => {
        this.htmlImageElement1.nativeElement.style = 'opacity:1;width:430px;height:330px;object-fit:cover';
        this.imageElement2.nativeElement.style = 'opacity:1;width:430px;height:330px;object-fit:cover';
        this.htmlImageElement1.nativeElement.src = './assets/Mistakes-To-Avoid-on-Upholstery-Cleaning-768x512-1.jpg'
        this.imageElement2.nativeElement.src = './assets/Mistakes-To-Avoid-on-Upholstery-Cleaning-768x512-1.jpg'
      }, 500)
    } else if (element.innerText === 'Пуфіки й крісла') {
      this.htmlImageElement1.nativeElement.style = 'opacity:0;width:430px;height:330px;object-fit:cover';
      this.imageElement2.nativeElement.style = 'opacity:0;width:430px;height:330px;object-fit:cover';
      setTimeout(() => {
        this.htmlImageElement1.nativeElement.style = 'opacity:1;width:430px;height:330px;object-fit:cover';
        this.imageElement2.nativeElement.style = 'opacity:1;width:430px;height:330px;object-fit:cover';
        this.htmlImageElement1.nativeElement.src = 'https://www.tlcinteriors.com.au/wp-content/uploads/2020/10/sack-it-tan-leather-beanbag-dunes-chair-australia.jpg'
        this.imageElement2.nativeElement.src = 'https://www.tlcinteriors.com.au/wp-content/uploads/2020/10/sack-it-tan-leather-beanbag-dunes-chair-australia.jpg'
      }, 500)
    }
  }

  resetNavBar() {
    this.PremiumDropDownMenu.nativeElement.style = 'opacity:0; margin-top:-600px; transition-duration: 0.5s;'
    this.PremiumDropDownMenuIsVisible = false
    this.DecorDropDownMenu.nativeElement.style = 'opacity:0; margin-top:-600px; transition-duration: 0.5s;';
    this.DecorDropDownMenuIsVisible = false
    this.ClassicDropDownMenu.nativeElement.style = 'opacity:0; margin-top:-600px; transition-duration: 0.5s;'
    this.ClassicDropDownMenuIsVisible = false
  }

  openClassic() {
    this.ClassicProducts.nativeElement.style = 'display:flex;top:8rem;margin-left:0;opacity:1;transition-duration:900ms'
    this.PremiumProducts.nativeElement.style = 'display:flex;top:8rem;margin-left:-200%;opacity:0;transition-duration:900ms'
    this.DecorProducts.nativeElement.style = 'display:flex;top:8rem;margin-left:-200%;opacity:0;transition-duration:900ms'
  }

  openPremium() {
    this.PremiumProducts.nativeElement.style = 'display:flex;top:8rem;margin-left:0;opacity:1;transition-duration:900ms'
    this.ClassicProducts.nativeElement.style = 'display:flex;top:8rem;margin-left:-200%;opacity:0;transition-duration:900ms'
    this.DecorProducts.nativeElement.style = 'display:flex;top:8rem;margin-left:-200%;opacity:0;transition-duration:900ms'

  }

  openDecor() {
    this.DecorProducts.nativeElement.style = 'display:flex;top:8rem;margin-left:0;opacity:1;transition-duration:900ms'
    this.ClassicProducts.nativeElement.style = 'display:flex;top:8rem;margin-left:-200%;opacity:0;transition-duration:900ms'
    this.PremiumProducts.nativeElement.style = 'display:flex;top:8rem;margin-left:-200%;opacity:0;transition-duration:900ms'
  }
}
