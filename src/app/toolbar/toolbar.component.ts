import {Component, OnInit} from '@angular/core';
import {DataBooksService} from "../_services/data-books.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private dataBooksService : DataBooksService) { }

  ngOnInit(): void {
  }

  onSave() {
    this.dataBooksService.saveBooks();
  }

  onLoad() {
     this.dataBooksService.getBooks();
  }
}
