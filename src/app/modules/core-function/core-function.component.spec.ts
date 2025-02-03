import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreFunctionComponent } from './core-function.component';

describe('CoreFunctionComponent', () => {
  let component: CoreFunctionComponent;
  let fixture: ComponentFixture<CoreFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreFunctionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
