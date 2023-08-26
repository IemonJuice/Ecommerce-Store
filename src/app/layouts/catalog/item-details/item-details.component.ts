import {Component, ElementRef, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AngularFirestore} from "@angular/fire/firestore";
import {AddToCardService} from "../../../services/add-to-card.service";


@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent {
  @ViewChild('modal', {static: false}) el: ElementRef | undefined
  @ViewChild('bigImageElement', {static: false}) bigImageElement: ElementRef | undefined
  itemId: string | null = '';
  modalSrc: string = '';
  collectionId: string | null = '';
  info: any
  addingNewProduct: boolean | undefined;
  isModalVisible: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private db: AngularFirestore,
    private toCard: AddToCardService) {

    this.route.paramMap.subscribe(params => {

      this.itemId = params.get('item');

      this.collectionId = params.get('type');
      this.getDocument();

    });
  }

  getDocument() {
    if (this.collectionId && this.itemId) {
      const documentRef = this.db.collection(`catalog/${this.collectionId}/${this.collectionId}s`).doc(this.itemId);
      this.info = documentRef.valueChanges();
      this.info.subscribe((data: any) => {
        this.info = data;
      })
    }
  }


  addToCard(obj: any) {
    this.toCard.addToCart(obj);
    this.addingNewProduct = true;
    setTimeout(() => {
      this.addingNewProduct = false;
    }, 1000)
  }

  getSrc($event: MouseEvent) {
    let small = $event.target as HTMLImageElement
    let big = this.bigImageElement?.nativeElement as HTMLImageElement
    big.src = small.src;
  }

  showModal($event: MouseEvent) {
    let image = $event.target as HTMLImageElement
    this.modalSrc = image.src;
    this.isModalVisible = !this.isModalVisible
  }

  closeModal() {
    this.isModalVisible = false;
  }
}
