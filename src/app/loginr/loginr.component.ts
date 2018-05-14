import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import { Http } from "@angular/http";
import { Profile } from "../models/Profile";
import { LoginService, ME } from "../models/login.service";


declare var googleyolo: any;
declare var FB: any;
declare var window: any;


@Component({
  selector: "app-loginr",
  templateUrl: "./loginr.component.html",
  styleUrls: ["./loginr.component.scss"],


})
export class LoginrComponent implements OnInit {
  // name: string;
  // password: string;
  // fbid: string;
  me = ME;
  apiRoot: string;
  Pictures: string[] = []

  constructor(private http: Http,
    private router: Router,
     private loginService: LoginService) {

       window.fbAsyncInit = () => {
       FB.init({
                   appId      : '2060883297484199',
                   status     : true,
                   cookie     : true,
                   xfbml      : true,
                   version    : 'v2.12'
               });

           };
           (function(d, s, id){
               var js, fjs = d.getElementsByTagName(s)[0];
               if (d.getElementById(id)) {return;}
               js = <HTMLScriptElement>d.createElement(s); js.id = id;
               js.src = "https://connect.facebook.net/en_US/sdk.js";
               fjs.parentNode.insertBefore(js, fjs);
             }(document, 'script', 'facebook-jssdk'));

           }

  ngOnInit() { }

  login(name: string, password: string, fbid?: string, picture?: string) {
    this.loginService.login(name, password, fbid, picture);

  }

  loginFB() {
    FB.login((credentials:any)=>{
            FB.api("/me?fields=email,name,picture", (response: any)=> {
                console.log(response);
            }).then((credentials: any) =>{
                this.loginService.oAuthLogin(credentials.displayName, " ", credentials.idToken, credentials.profilePicture);
              })
              console.log(credentials);
        })
      }

  logingoogle(){
    googleyolo.hint({
        supportedAuthMethods: [
          "https://accounts.google.com"
          ],
          supportedIdTokenProviders: [
            {
                uri: "https://accounts.google.com",
                clientId: "127811445743-8uo1b7vbretscar7t4kmuqiu8mhq04a5.apps.googleusercontent.com"
            }
          ]
        }).then((credentials: any) =>{
            this.loginService.oAuthLogin(credentials.displayName, " ", credentials.idToken, credentials.profilePicture);
            console.log(credentials);

        })
        //this.login(credentials.displayName, "password" credentials.idToken, credentials.profilePicture);
    }

}
