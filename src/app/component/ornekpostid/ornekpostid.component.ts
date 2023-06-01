import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { RequestService } from 'src/app/service/request.service';



@Component({
  selector: 'app-ornekpostid',
  templateUrl: './ornekpostid.component.html',
  styleUrls: ['./ornekpostid.component.css']
})
export class OrnekpostidComponent implements OnInit {

  post:Post|any;

  constructor(private jsonRequest:RequestService){}

  ngOnInit(): void {

    this.jsonRequest.getPost(2).subscribe({ //2 idsi gönderiliyor
      next:(x)=>console.log(x.body?.userId)   ,//this.post=x,
      error:(e)=>alert("data bnulunamadı"), //hata mesajı böyle alınabilir. veya servis tarafında alınabilir.
      complete:()=>console.log("istek tanımlandı")
    })
  }

}
