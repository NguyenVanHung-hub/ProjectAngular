import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdmincontenComponent } from './home-adminconten.component';

describe('HomeAdmincontenComponent', () => {
  let component: HomeAdmincontenComponent;
  let fixture: ComponentFixture<HomeAdmincontenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeAdmincontenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAdmincontenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
