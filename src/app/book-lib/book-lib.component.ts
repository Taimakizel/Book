import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-book-lib',
  templateUrl: './book-lib.component.html',
  styleUrls: ['./book-lib.component.css']
})
export class BookLibComponent {
  books: any[] = [];
  constructor(private serviceService: ServiceService) { }
  ngOnInit() {
    this.books = this.serviceService.books;
  }
}
