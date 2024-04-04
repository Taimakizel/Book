import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-searchbook',
  templateUrl: './searchbook.component.html',
  styleUrls: ['./searchbook.component.css']
})
export class SearchbookComponent {
  searchQuery: string = ''; 
  booksOut: any[] = [];

  constructor(private httpclient: HttpClient) {}

  searchBooks=()=> {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${this.searchQuery}`;
    this.httpclient.get(url).subscribe((response: any) => {
      this.booksOut = response.items || [];
    });
  }
}
