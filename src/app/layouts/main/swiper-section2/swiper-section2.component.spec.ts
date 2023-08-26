import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperSection2Component } from './swiper-section2.component';

describe('SwiperSection2Component', () => {
  let component: SwiperSection2Component;
  let fixture: ComponentFixture<SwiperSection2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiperSection2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwiperSection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
