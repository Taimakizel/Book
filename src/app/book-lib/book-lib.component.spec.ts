import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookLibComponent } from './book-lib.component';

describe('BookLibComponent', () => {
  let component: BookLibComponent;
  let fixture: ComponentFixture<BookLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookLibComponent]
    });
    fixture = TestBed.createComponent(BookLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
