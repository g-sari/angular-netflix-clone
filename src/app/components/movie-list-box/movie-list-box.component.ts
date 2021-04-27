import { Component, Input, OnInit } from '@angular/core';
import { SearchModel } from 'src/app/shared/models/search.model';

@Component({
  selector: 'movie-list-box',
  templateUrl: './movie-list-box.component.html',
  styleUrls: ['./movie-list-box.component.scss']
})
export class MovieListBoxComponent implements OnInit {

  @Input() public title: string = '';
  @Input() public searchList: SearchModel | null = new SearchModel();

  constructor() { }

  ngOnInit(): void {}

}
