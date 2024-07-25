import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdmimComponent } from './home-admim.component';

describe('HomeAdmimComponent', () => {
  let component: HomeAdmimComponent;
  let fixture: ComponentFixture<HomeAdmimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeAdmimComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAdmimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
