import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMarvel } from '../schema/marvel.schema';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  constructor(private http: HttpClient) { }

  getCharacter(offset, limit): Observable<IMarvel> {
    const URL = 'https://gateway.marvel.com/v1/public/characters?apikey=6297ba661e950de378e892a79b6accf8&hash=a69ffe785740a58d451e689908a83044&ts=1' + "&offset=" + offset + "&limit=" + limit;
    return this.http.get<IMarvel>(URL);
  }
}
