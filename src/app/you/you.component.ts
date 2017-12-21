import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import { Router } from "@angular/router";
import { LoginService, ME } from "../models/login.service";
import { Exercise } from "../models/Exercise";
declare const FB: any;
@Component({
  selector: "app-you",
  templateUrl: "./you.component.html",
  styleUrls: ["./you.component.scss"]
})
export class YouComponent implements OnInit {
  ME = ME;
  constructor(private http: Http, private router: Router, private shareService: LoginService) { }

  ngOnInit() {
    if (ME == null) {
      this.router.navigate(["/login"]);
    }
  }

  update() { 
    
  }

  logout() {
    
    this.router.navigate(["/login"]);
  }
  edit(day:string)
  {
    ME.modDat = day;
    this.router.navigate(["/exercises"]);
  }


}
