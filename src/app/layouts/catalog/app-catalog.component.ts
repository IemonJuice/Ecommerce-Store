import { Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {CatalogParameterService} from "../../catalog-parameter.service";
import {AngularFirestore} from '@angular/fire/firestore';

import {GetProductsQuantityService} from "../../services/app-get-products-quantity.service";

@Component({
  selector: 'app-catalog',
  templateUrl: './app-catalog.component.html',
  styleUrls: ['./app-catalog.component.scss'],

})
export class AppCatalogComponent implements OnDestroy {
  @ViewChild('catalog_item_price') itemPrice: ElementRef | undefined;
  @ViewChild('parentSorting') parentSorting: ElementRef | undefined;

  @ViewChild('imageElement') imageElement: ElementRef | undefined;

  public filtrationString: string = 'без фільтрації'
  public loader = false;

  public receivedData: any;
  public transformedData: any | undefined = [];
  private subscription: Subscription;

  data: Observable<unknown[]> | undefined;
  io: IntersectionObserver | null = null;

  constructor(
    private catalogService: CatalogParameterService,
    private db: AngularFirestore,
    private FetchData: GetProductsQuantityService
  ) {

    this.loader = true;

    this.subscription = this.catalogService.data$.subscribe((data) => {

      this.receivedData = data;

      this.data = FetchData.fetchData(this.receivedData)

      this.data.subscribe((data) => {

        this.transformedData = data;

      });
    });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();

    // this.disconnectIntersectionObserver();
    this.transformedData = [];

  }

  // initializeIntersectionObserver(target: HTMLImageElement) {
  //   this.disconnectIntersectionObserver();
  //   this.io = new IntersectionObserver((entries, observer) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         setTimeout(()=>{
  //           this.loader = false;
  //           observer.disconnect();
  //           },1000)
  //       }
  //     });
  //   });
  //   this.io.observe(target);
  // }

  // private disconnectIntersectionObserver() {
  //   if (this.io) {
  //     this.io.disconnect();
  //     this.io = null;
  //   }
  // }


  // Sincerely don't know how to correctly implement skeleton feature, pls write me in comments or DM

  removeSkeleton() {
    setTimeout(() => {
      this.loader = false
    }, 500)
  }

  showPrice(element: HTMLParagraphElement) {
    if (this.itemPrice !== undefined) {
      element.style.opacity = '1';
    }
  }

  hidePrice(element: HTMLParagraphElement) {
    if (this.itemPrice !== undefined) {
      element.style.opacity = '0';
    }
  }

  SortUp() {
    this.transformedData.sort((a: any, b: any) => b.price - a.price);
    this.filtrationString = 'Спочатку дешевші'
  }

  SortDown() {
    this.transformedData.sort((a: any, b: any) => a.price - b.price);
    this.filtrationString = 'Спочатку дорожчі'
  }

}
