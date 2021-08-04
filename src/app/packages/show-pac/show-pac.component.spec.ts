import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPacComponent } from './show-pac.component';

describe('ShowPacComponent', () => {
  let component: ShowPacComponent;
  let fixture: ComponentFixture<ShowPacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
