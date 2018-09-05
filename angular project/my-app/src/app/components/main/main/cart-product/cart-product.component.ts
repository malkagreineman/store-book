import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../../../../share/service/book.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements OnInit {
  @Input() book: any
  constructor(private bookservice: BookService) {
  }

  ngOnInit() {
  }
  remove() {
    this.bookservice.subject.next(this.book)
  }
}
