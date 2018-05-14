import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { LoginService } from '../models/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private h: Http, private login: LoginService) { }
  search:string="";
  lastSearch:string="";
  temp:string[]=[];
  ngOnInit() {
    setInterval(() => this.update(), 1000);
  }
  update(){
    if (this.search == this.lastSearch)
      {
        console.log(this.search+"  "+this.lastSearch)
        return;
      }
      this.lastSearch = this.search;
      this.temp.splice(0,this.temp.length);
    console.log("in update post"+this.search)
    this.h.post("exercises/search",{mySearch: this.search}).subscribe(data=>{
    this.temp = data.json();
    console.log(this.temp[0]);
    });

  }

}
