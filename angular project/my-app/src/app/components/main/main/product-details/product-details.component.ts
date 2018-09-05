import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService } from '../../../../share/service/book.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  book: any;
  currentList = this.getCurrentList();
  localStorage = localStorage.getItem('currentUser')
  bookName: string;
  constructor(private routerActive: ActivatedRoute, private router: Router,private bookService:BookService) {
  }

  ngOnInit() {
    this.bookName = this.routerActive.snapshot.params['book'];
    this.bookService.getFilterList(this.bookName).subscribe(res => 
      { this.book = res["items"][0]; 
    });
  }

  back() {
    this.router.navigate(['/products'])
  }

  addToCart() { 
    this.currentList.push(this.book);
    localStorage.setItem('productList', JSON.stringify(this.currentList));
  }

  getCurrentList() {
    let list = localStorage.getItem("productList");  
    return (list) ? JSON.parse(list) : [];
  }


}
