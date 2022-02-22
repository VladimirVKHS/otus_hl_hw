import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedPageComponentComponent } from './feed-page-component.component';

describe('FeedPageComponentComponent', () => {
  let component: FeedPageComponentComponent;
  let fixture: ComponentFixture<FeedPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedPageComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
