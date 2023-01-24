import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {BookModelComponent} from "../interfaces/book-model/book-model.component";
import {DataBooksService} from "../_services/data-books.service";
import {Book} from "../interfaces/book";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class Main implements OnInit,AfterViewInit {

  dataSource = new MatTableDataSource<BookModelComponent>();
  displayedColumns: string[] = ['id', 'name', 'img', 'desc'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  imgPath : string ='';
  books: Book[] = [];

  constructor(private booksService : DataBooksService ) { }

  ngOnInit(): void {
    this.booksService.getBooks().subscribe(data =>{
      this.books = data;
      this.dataSource.data = data;
       data.map(item => {
         this.imgPath = item.img;
      })
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  completeRdv(id : any) {

  }
}

