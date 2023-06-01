import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { UserClass } from './models/user-class';
import { Post } from './models/post';
import { RequestService } from './service/request.service';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  //user: any;
  user:User|undefined;
  UserClass:UserClass|undefined;
  postList:Post[]=[];
  title = 'httpClient';

  constructor(private jsonRequest:RequestService){
  }
  //constructor(private http:HttpClient) { }


  ngOnInit(): void {

    // this.http.get<any>('https://jsonplaceholder.typicode.com/todos/1').subscribe(x=>{
    //   console.log(x.userId) //<any> olarak get tipi belirtilirse gelen url uzerinden userId alınabilir.
    // })

    // this.http.get<User>('https://jsonplaceholder.typicode.com/todos/1').subscribe(x=>{ //interface ile karşılama
    //   this.user=x; //gelen dataların hepsi alınmak istenirse --- .html
    // })

    // this.http.get<UserClass>('https://jsonplaceholder.typicode.com/todos/1').subscribe(x=>{ //class ile karşılama
    //   this.UserClass=x;
    // })

    // this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').subscribe(x=>{ //interface ile dizin karşılama
    //   this.postList=x;
    // })

    this.jsonRequest.getPostList().subscribe(x=> this.postList=x) //request servisini kullanarak istek

  }
}
