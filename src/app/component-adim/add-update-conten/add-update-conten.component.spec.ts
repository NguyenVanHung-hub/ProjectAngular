import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateContenComponent } from './add-update-conten.component';

describe('AddUpdateContenComponent', () => {
  let component: AddUpdateContenComponent;
  let fixture: ComponentFixture<AddUpdateContenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddUpdateContenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUpdateContenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
