import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Observable, of} from "rxjs";
import {FormBuilder, Validators} from "@angular/forms";
import {AngularFirestore} from "@angular/fire/firestore";
import {GetProductsQuantityService} from "../../services/app-get-products-quantity.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],

})
export class CardComponent implements OnInit {

  successOrder: boolean = false
  redirection: string | undefined

  paymentFormVisibility: boolean = false;
  listOfCheckouts: any;
  orderItems: Observable<any> = of('')
  quantity: any;

  @ViewChild('form', {static: true}) form: ElementRef | undefined
  totalSum: number = 0;
  date: number = 0;
  haveToOrder: string = 'Пуста';
  min = 10000000000;
  max = 99999999999;

  orderForm = this.fb.nonNullable.group({
      fullName: ['', Validators.required],
      address: ['', Validators.required],
      phone: [Validators.required, Validators.minLength(6)],
      expectations: [''],
      orderId: `${Math.floor(Math.random() * (this.max - this.min + 1)) + this.min + this.date}`,
      orderItems: []
    }
  )

  constructor(private fb: FormBuilder, private db: AngularFirestore, private getProducts: GetProductsQuantityService) {
    if (localStorage.getItem('cart')) {
      this.listOfCheckouts = localStorage.getItem('cart')
      this.listOfCheckouts = JSON.parse(this.listOfCheckouts);
      this.quantity = this.listOfCheckouts.length

      for (let item of this.listOfCheckouts) {
        this.totalSum += item._price * item._quantity;
      }
    } else {
      localStorage.setItem('cart', '[]')
    }

    if (this.totalSum === 0) {
      this.haveToOrder = 'Пуста'
    } else {
      this.haveToOrder = 'Виконайте замовлення'
    }

    this.redirection = 'Catalog/'
  }

  ngOnInit(): void {

    if (this.form) {
      this.form.nativeElement.style = 'margin-left:200% !important;  transition-duration:300ms;'
    }
    const storedValue: any = localStorage.getItem('cart');
    if (storedValue !== null) {
      this.orderForm.patchValue({
        orderItems: JSON.parse(storedValue)
      });
    }

  }

  remove(nameOfItem: any) {
    for (let i = 0; i < this.listOfCheckouts.length; i++) {
      if (i === nameOfItem) {
        this.totalSum -= this.listOfCheckouts[i]._price * this.listOfCheckouts[i]._quantity;
        this.listOfCheckouts.splice(i, 1)
        this.quantity--;
      }
    }
    localStorage.setItem('cart', JSON.stringify(this.listOfCheckouts))
    if (this.quantity === 0) {
      this.haveToOrder = 'Пуста'
    }
  }

  IncrementItems(arg: any) {
    for (let i = 0; i < this.listOfCheckouts.length; i++) {
      if (i === arg && this.listOfCheckouts[i]._quantity > 0) {
        this.listOfCheckouts[i]._quantity++;
        this.totalSum += this.listOfCheckouts[i]._price;
      }
    }
    localStorage.setItem('cart', JSON.stringify(this.listOfCheckouts))
  }

  DecrementItems(arg: any) {
    for (let i = 0; i < this.listOfCheckouts.length; i++) {
      if (i === arg && this.listOfCheckouts[i]._quantity > 1) {
        this.listOfCheckouts[i]._quantity--;
        this.totalSum -= this.listOfCheckouts[i]._price;
      }
    }
    localStorage.setItem('cart', JSON.stringify(this.listOfCheckouts))
  }


  showPaymentForm() {
    this.paymentFormVisibility = !this.paymentFormVisibility
  }

  confirmCheckout() {
    if (this.orderForm.valid) {
      this.date = Math.floor(new Date().getSeconds() * Math.random());
      this.paymentFormVisibility = !this.paymentFormVisibility
      this.successOrder = true;
      this.orderItems = this.listOfCheckouts
      this.db.collection('orders').add(this.orderForm.getRawValue()).then();
      localStorage.removeItem('cart')
      this.listOfCheckouts = [];
    }
  }
}
