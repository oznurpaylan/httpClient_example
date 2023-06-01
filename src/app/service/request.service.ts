import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http:HttpClient) { }

  getPostList(){
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  }

  getPost(id:number){
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`,{observe:'response'}) // opsiyonel olarak responsdan gelen tüm veriyi alabilirsin bu şekilde sadeece bodyi gösterir next:(x)=>console.log(x.body)
  }
  // getPost(id:number){
  //   return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`).pipe(catchErorr(e=>{ //hata mesajı rxjs kütüpanesi kullanılarak
  //     throw new Error("data bulunamadı")
  //   }))
  // }

  getPostHeader(id:number){ //gelen istek üzerinden header ile nasıl veri gönderilir
    const customHeader=new HttpHeaders({
      'Content-Type':'example',
      'Authorization':'example token'
    })
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`,{observe:'response',headers:customHeader})

  }

  getPostQueryString(id:number){ //gelen istek üzerinden query string verisi gönderme
    var queryParams=new HttpParams({
      'fromString':'name=öznur%age=23'
    })
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`,{params:queryParams})
  }
}
