import { Profile } from "./Profile";
import { Http } from "@angular/http";

export class list {
    http:Http;
    allProfiles : Profile[]=[new Profile("Tester1","1313","dsdsd",this.http)];
    constructor(){
        console.log("in constructor")
        this.http.get("localhost:3000/user/allProfs").subscribe(data =>{
            this.allProfiles = data.json();
            console.log(data)
        })
    }

    init(){
    }


}
