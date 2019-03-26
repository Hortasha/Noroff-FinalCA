import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSpecificPageComponent } from './card-specific-page.component';

describe('CardSpecificPageComponent', () => {
  let component: CardSpecificPageComponent;
  let fixture: ComponentFixture<CardSpecificPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSpecificPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSpecificPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
