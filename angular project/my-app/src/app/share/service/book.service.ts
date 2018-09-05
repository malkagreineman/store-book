import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { of, Observable, Subject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class BookService {
    subject=new Subject();
    constructor(private http: HttpClient) { }
    getFilterList(type:string):Observable<any> {
        return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${type}&maxResults=40&fields=items(saleInfo%2FlistPrice%2CvolumeInfo(authors%2Cdescription%2CimageLinks(smallThumbnail%2Cthumbnail)%2Clanguage%2CmainCategory%2CpageCount%2CpublishedDate%2Cpublisher%2Csubtitle%2Ctitle))`)
    }
    getFullList()
    {
        return this.http.get("https://www.googleapis.com/books/v1/volumes?q=a&maxResults=40&fields=items(saleInfo%2FlistPrice%2CvolumeInfo(authors%2Cdescription%2CimageLinks(smallThumbnail%2Cthumbnail)%2Clanguage%2CmainCategory%2CpageCount%2CpublishedDate%2Cpublisher%2Csubtitle%2Ctitle))")
    }
    
    

}