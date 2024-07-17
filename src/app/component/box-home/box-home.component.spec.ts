import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxHomeComponent } from './box-home.component';

describe('BoxHomeComponent', () => {
  let component: BoxHomeComponent;
  let fixture: ComponentFixture<BoxHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
