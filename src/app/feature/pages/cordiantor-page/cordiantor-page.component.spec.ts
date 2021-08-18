import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CordiantorPageComponent } from './cordiantor-page.component';

describe('CordiantorPageComponent', () => {
  let component: CordiantorPageComponent;
  let fixture: ComponentFixture<CordiantorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CordiantorPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CordiantorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
