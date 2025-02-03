import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarContentComponent } from './nav-bar-content.component';

describe('NavBarContentComponent', () => {
  let component: NavBarContentComponent;
  let fixture: ComponentFixture<NavBarContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
