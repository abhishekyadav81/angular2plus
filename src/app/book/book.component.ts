import { Component, OnInit } from '@angular/core';

import {BookService} from '../service/bookservice'
import {BookModel} from '../model/bookmodel'

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  private books : BookModel[];
  constructor(private bookService: BookService) {}

  getBookData(){
    this.bookService.getBooks().subscribe(books => this.books = books);
  }

  ngOnInit() {
  }

}
