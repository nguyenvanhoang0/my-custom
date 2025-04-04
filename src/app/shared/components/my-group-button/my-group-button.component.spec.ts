import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGroupButtonComponent } from './my-group-button.component';

describe('MyGroupButtonComponent', () => {
  let component: MyGroupButtonComponent;
  let fixture: ComponentFixture<MyGroupButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyGroupButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyGroupButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
