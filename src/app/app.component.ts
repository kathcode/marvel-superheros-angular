import { Component } from '@angular/core';
import { MarvelService } from './data/services/marvel.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Observable data to share with sg grid component
  characters = new BehaviorSubject<any>([]);
  // Pagination info
  offset = 0;
  limit = 10;
  rowBuffer = 0;
  paginationPageSize = 10;
  maxBlocksInCache = 1;
  cacheBlockSize = 20;

  // Ag grid headers
  headerGrid = [
    { headerName: 'Name', field: 'name' },
    { headerName: 'Id', field: 'id'},
  ]
  constructor(private marvelService: MarvelService) {}

  getCharacters(offset, limit): void {
    this.marvelService.getCharacter(offset, limit).subscribe(response => this.characters.next(response.data.results));
  }
}
