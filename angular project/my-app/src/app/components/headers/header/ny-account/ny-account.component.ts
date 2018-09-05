import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../share/service/user.service';
import { User } from '../../../../share/model/user';

@Component({
  selector: 'app-ny-account',
  templateUrl: './ny-account.component.html',
  styleUrls: ['./ny-account.component.css']
})
export class NyAccountComponent implements OnInit {
  currentList:string;
   user:User;
   
  constructor(private userService:UserService) {
    this.user=new User();
    this.user=this.userService.check();
    this.userService.subject.subscribe(
      {
        next: (v:any) => {
          this.user=v;
        }
      }
    );
   }
logout(){
  this.userService.logout();
}
  ngOnInit() {
  }
}
