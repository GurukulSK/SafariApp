import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsafariComponent } from './addsafari.component';

describe('AddsafariComponent', () => {
  let component: AddsafariComponent;
  let fixture: ComponentFixture<AddsafariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddsafariComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddsafariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
