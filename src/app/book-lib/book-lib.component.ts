import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-book-lib',
  templateUrl: './book-lib.component.html',
  styleUrls: ['./book-lib.component.css']
})
export class BookLibComponent {
  books: {name:string,author:string,quantity:number}[] = [];

  constructor(private serviceService: ServiceService) { 

  }

  ngOnInit=() =>{
    this.books = this.serviceService.books;
  }

}
