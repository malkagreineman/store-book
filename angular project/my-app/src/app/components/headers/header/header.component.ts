import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../share/service/user.service';
import { User } from '../../../share/model/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: User;
  constructor(private userService: UserService) {
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

  ngOnInit() {
  }
}
