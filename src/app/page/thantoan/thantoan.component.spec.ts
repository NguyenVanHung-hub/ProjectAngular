import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThantoanComponent } from './thantoan.component';

describe('ThantoanComponent', () => {
  let component: ThantoanComponent;
  let fixture: ComponentFixture<ThantoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThantoanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThantoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
