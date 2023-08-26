import {ChangeDetectionStrategy, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {GetCoordinatesWhenScrollingService} from "../../services/get-coordinates-when-scrolling.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  @ViewChild('videoElement', {static: false}) el: ElementRef | undefined;
  @ViewChild('element', {static: false}) element: ElementRef | undefined;
  @ViewChild('videoElementForUpdating', {static: false}) videoElementForUpdating: ElementRef | undefined;
  @ViewChild('center', {static: false}) center: ElementRef | undefined;
  @ViewChild('right', {static: false}) right: ElementRef | undefined;
  @ViewChild('left', {static: false}) left: ElementRef | undefined;

  @HostListener('window:scroll', ['$event']) onScroll($event: Event): void {
    if (scrollY > 300 && $event) {
      if (this.center?.nativeElement && this.left?.nativeElement && this.right?.nativeElement) {
        this.left.nativeElement.style = 'opacity: 1;transform:translateX(0%); transition-duration:1s'
        this.right.nativeElement.style = 'opacity: 1;transform:translateX(0%);transition-duration:1s'
        this.center.nativeElement.style = 'opacity: 1; transition-duration:1s'
      }
    } else {
      if (this.center?.nativeElement && this.left?.nativeElement && this.right?.nativeElement) {
        this.left.nativeElement.style = 'opacity: 0.2;transform:translateX(-100%);transition-duration:1s'
        this.right.nativeElement.style = 'opacity: 0.2;transform:translateX(100%);transition-duration:1s'
        this.center.nativeElement.style = 'opacity: 0.2; transition-duration:1s'
      }
    }
  }

  constructor(private GetCoordinates: GetCoordinatesWhenScrollingService) {
    if (this.el?.nativeElement.paused) {
      this.el?.nativeElement.play();
    }
  }

  getCoordinates(elRef: HTMLDivElement, event: any) {
    this.GetCoordinates.getCoordinates(elRef, event)
  }


  scrollTO() {
    if (window.innerWidth > 678) {
      scrollTo(0, 3500)
    } else {
      scrollTo(0, 5000)
    }
  }
}
