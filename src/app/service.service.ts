import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  books: any[] = [];
  addBook=(formBody: NgForm)=> {
    alert("The Book Added Successfuly")
    if (formBody.valid) {
      let newBook = {
      name: formBody.value.name,
      author: formBody.value.Author,
      quantity: formBody.value.Quantity,
    };
    this.books.push(newBook);
    formBody.resetForm();
  }
}

  constructor() { }
}
