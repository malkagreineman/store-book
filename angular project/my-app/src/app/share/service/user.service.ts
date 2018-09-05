import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { of, Subject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../model/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    //allUser: any = [];
    //userService: any;
    user: User
    constructor(private http: HttpClient, private router: Router) {
        this.user=null;
     }
    subject = new Subject();
    login(user) {
        this.http.post("http://localhost:3500/api/login/", JSON.parse(JSON.stringify(user))).subscribe
        (res => {
            user = JSON.stringify(res);
            localStorage.setItem('currentUser', user);
             this.subject.next(this.check());
            this.router.navigate(["/home"]);
        }, 
        err => {
            this.router.navigate(["/myAccount/register"]);
        })
    }

    register(user) {
        return this.http.post("http://localhost:3500/api/register/",user).subscribe(res=>{
            user = JSON.stringify(res);
            this.router.navigate(["/myAccount/login"]);
            req=>{alert("can not register")}
        });
    }
    logout() {
        localStorage.clear();
        this.subject.next(this.check());
    }
    check(){
        return JSON.parse(localStorage.getItem('currentUser'))
    }

}
