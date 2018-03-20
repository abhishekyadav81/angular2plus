import { Injectable } from "@angular/core";
  
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import {BookModel} from '../model/bookmodel'



@Injectable()
export class BookService {
  private bookUrl = 'api/books';  // URL to web api

    constructor (private http: HttpClient) {
      }

    
    /** GET books from the server */
    getBooks (): Observable<BookModel[]> {
      return this.http.get<BookModel[]>(this.bookUrl);       
    }
    
}