import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import { Http } from "@angular/http";
import { Profile } from "../models/Profile";
import { LoginService, ME } from "../models/login.service";


declare var window: any;
declare var FB: any;

@Component({
  selector: "app-loginr",
  templateUrl: "./loginr.component.html",
  styleUrls: ["./loginr.component.scss"],


})
export class LoginrComponent implements OnInit {
  name: string;
  password: string;
  me = ME;
  apiRoot: string;
  ngOnInit() { }

  constructor(private http: Http, private router: Router, private shareService: LoginService) {
    this.apiRoot = `//${window.location.hostname}:3001`; 
    window.fbAsyncInit = function () {
      FB.init({
        appId: "1975646716023882",
        cookie: true,
        xfbml: true,
        version: "v2.11"
      });
      FB.AppEvents.logPageView();
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = <HTMLScriptElement>d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }

  loginFB() {
    this.shareService.loginFB();
  }

  login(name: string, password: string, fbid?: string, picture?: string) {
    this.shareService.login(name, password, fbid, picture);


  }
}
