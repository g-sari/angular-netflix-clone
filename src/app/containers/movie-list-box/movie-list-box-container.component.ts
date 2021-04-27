import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { OmdbService } from 'src/app/services/omdb.service';
import { SearchModel } from 'src/app/shared/models/search.model';

@Component({
  selector: 'movie-list-box-container',
  templateUrl: './movie-list-box-container.component.html',
  styleUrls: ['./movie-list-box-container.component.scss']
})
export class MovieListBoxContainerComponent implements OnInit {

  @Input() public query: string = '';
  public searchResults$: Observable<SearchModel> = of(new SearchModel());

  constructor(private omdbService: OmdbService) {}

  ngOnInit(): void {
    this.searchResults$ = this.omdbService.searchMovies(this.query)
    .pipe(
      map((data: SearchModel) => {
        data.Search.sort((a, b) => {
          return a.Year > b.Year ? -1 : 1;
      });
      return data;
    }));
  }

}
