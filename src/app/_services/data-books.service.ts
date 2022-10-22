import {Injectable} from '@angular/core';
import {BooksListService} from "./books-list.service";
import {HttpClient} from "@angular/common/http";
import {BookModelComponent} from "../interfaces/book-model/book-model.component";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataBooksService {

  constructor(private booksList : BooksListService , private http : HttpClient) { }

 saveBooks(){
    const books = this.booksList.booksList;
    this.http.put('https://e-library-6a34a-default-rtdb.europe-west1.firebasedatabase.app/books.json',books).subscribe((books)=>{
      console.log(books);
    })
  }
  getBooks() : Observable<BookModelComponent[]>{
    return  this.http.get<BookModelComponent[]>('https://e-library-6a34a-default-rtdb.europe-west1.firebasedatabase.app/books.json');
  }
}
