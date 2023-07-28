import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotPageComponent } from './not-page.component';

describe('NotPageComponent', () => {
  let component: NotPageComponent;
  let fixture: ComponentFixture<NotPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotPageComponent]
    });
    fixture = TestBed.createComponent(NotPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
