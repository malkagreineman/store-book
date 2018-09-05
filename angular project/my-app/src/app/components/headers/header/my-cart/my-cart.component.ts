import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../../share/service/book.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {
  constructor(private bookService: BookService) {
    this.bookService.subject.subscribe(
      {
        next: (book: any) => this.removeBook(book)
      }
    );
  }
  cartBooks: any[];
  ngOnInit() {
    this.cartBooks = this.getCurrentList();
  }
  getCurrentList() {
    let list = localStorage.getItem("productList");
    return (list) ? JSON.parse(list) : [];
  }
  removeBook(book: any) {
    let index = this.cartBooks.indexOf(book);
    this.cartBooks.splice(index, 1);
    localStorage.setItem("productList", JSON.stringify(this.cartBooks));
  }
}
