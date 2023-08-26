import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCatalogComponent } from './app-catalog.component';

describe('CatalogComponent', () => {
  let component: AppCatalogComponent;
  let fixture: ComponentFixture<AppCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppCatalogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
