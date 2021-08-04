import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSpecComponent } from './show-spec.component';

describe('ShowSpecComponent', () => {
  let component: ShowSpecComponent;
  let fixture: ComponentFixture<ShowSpecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSpecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
