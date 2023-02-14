import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadresComponent } from './quadres.component';

describe('QuadresComponent', () => {
  let component: QuadresComponent;
  let fixture: ComponentFixture<QuadresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuadresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuadresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
