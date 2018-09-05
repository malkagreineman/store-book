import { Component, OnInit } from '@angular/core';
import { Store } from '../../../share/model/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

mystore:Store;

  constructor() {

    this.mystore=new Store();
    this.mystore.city = "Bnei Braq";
    this.mystore.number = 85;
    this.mystore.street = "Hazon Hish"
  }

  ngOnInit() {
  }

}
