import { Component, OnInit, Input } from '@angular/core';
import { Router } from '../../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.css']
})
export class ProductPreviewComponent implements OnInit {

  @Input() book: any;

  constructor(private router:Router) {
   }

  ngOnInit() {
  }
}
