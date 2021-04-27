import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListBoxComponent } from './movie-list-box.component';

describe('MovieListBoxComponent', () => {
  let component: MovieListBoxComponent;
  let fixture: ComponentFixture<MovieListBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieListBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
