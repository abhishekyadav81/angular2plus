import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryBookService implements InMemoryDbService {
  createDb() {
    const books = [

      { bookId: 1, bookName: 'C++',bookAuthor:'Bjarne Stroutsrup' },
      { bookId: 2, bookName: 'Java',bookAuthor:'Joshua' },
      { bookId: 3, bookName: 'Spring',bookAuthor:'Baeldung' },
      { bookId: 4, bookName: 'Angular 4',bookAuthor:'Ram' },
    
    ];
    return {books};
  }
}
