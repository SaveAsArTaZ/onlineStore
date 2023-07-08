import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosedItemComponent } from './choosed-item.component';

describe('ChoosedItemComponent', () => {
  let component: ChoosedItemComponent;
  let fixture: ComponentFixture<ChoosedItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChoosedItemComponent]
    });
    fixture = TestBed.createComponent(ChoosedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
