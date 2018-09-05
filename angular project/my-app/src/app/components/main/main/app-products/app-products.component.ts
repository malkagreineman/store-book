import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../../share/service/book.service';

@Component({
  selector: 'app-app-products',
  templateUrl: './app-products.component.html',
  styleUrls: ['./app-products.component.css']
})
export class AppProductsComponent implements OnInit {
  filterList: any = [];

  constructor(private bookService: BookService) { }
  ngOnInit() {
    this.bookService.getFullList().subscribe(data=>{
      this.filterList=data['items'];
    })
  }
  search(type) {
    this.bookService.getFilterList(type).subscribe(data => {
      this.filterList = data['items'];
      //console.log(this.filterList);
    })
  }
}
