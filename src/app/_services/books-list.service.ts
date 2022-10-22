import {Injectable} from '@angular/core';
import {BookModelComponent} from "../interfaces/book-model/book-model.component";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BooksListService {

  constructor() { }

  booksData = new Subject<BookModelComponent[]>();
  booksList : BookModelComponent[]= [
   new BookModelComponent(
    1,'book1','https://i.postimg.cc/j2Zcg85M/Buyology-Truth-and-Lies-About-Why-We-Buy.png','zwin1'
  ),
    new BookModelComponent(
      2,'book2','img2','zwin2'
    )
  ];

  setBooks(books : BookModelComponent[]){
    this.booksList = books;
    this.booksData.next(books);
  }


}
