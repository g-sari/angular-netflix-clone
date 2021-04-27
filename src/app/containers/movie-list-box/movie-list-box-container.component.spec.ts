import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListBoxContainerComponent } from './movie-list-box-container.component';

describe('MovieListBoxContainerComponent', () => {
  let component: MovieListBoxContainerComponent;
  let fixture: ComponentFixture<MovieListBoxContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieListBoxContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListBoxContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
