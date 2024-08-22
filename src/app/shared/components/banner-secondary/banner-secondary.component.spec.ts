import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerSecondaryComponent } from './banner-secondary.component';

describe('BannerSecondaryComponent', () => {
  let component: BannerSecondaryComponent;
  let fixture: ComponentFixture<BannerSecondaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerSecondaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
