import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalMainComponent } from './portal-main.component';

describe('PortalMainComponent', () => {
  let component: PortalMainComponent;
  let fixture: ComponentFixture<PortalMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PortalMainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PortalMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
