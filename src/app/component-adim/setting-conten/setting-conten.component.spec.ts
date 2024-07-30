import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingContenComponent } from './setting-conten.component';

describe('SettingContenComponent', () => {
  let component: SettingContenComponent;
  let fixture: ComponentFixture<SettingContenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingContenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingContenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
