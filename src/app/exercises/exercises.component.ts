import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { Router } from "@angular/router";
import { Profile } from "../models/Profile";
import { Exercise } from "../models/Exercise";
import { LoginService, ME } from "../models/login.service";
import { Form } from "@angular/forms";

@Component({
  selector: "app-exercises",
  templateUrl: "./exercises.component.html",
  styleUrls: ["./exercises.component.scss"],

})
export class ExercisesComponent implements OnInit {
  constructor(private router: Router,private shareService: LoginService) { }
  ME = ME;
  day: string;
  thisDay: string[]=[];
  temp:string;
  lastExercise:string;
  ngOnInit() {
    if (ME == null) {
      this.router.navigate(["/login"]);
    }

    if (ME.modDat == "sunday")
      {
        this.thisDay = ME.sunday;
      }

    if (ME.modDat == "monday")
        {
          this.thisDay = ME.monday;
        }


    if (ME.modDat == "tuesday")
          {
            this.thisDay = ME.tuesday;
          }

    if (ME.modDat == "wednesday")
            {
              this.thisDay = ME.wensday;
            }
            if (ME.modDat == "thursday")
              {
                this.thisDay = ME.thursday;
              }


          if (ME.modDat == "friday")
                {
                  this.thisDay = ME.friday;
                }

          if (ME.modDat == "saturday")
                  {
                    this.thisDay = ME.saturday;
                  }
  }

    save(){
      if (ME.modDat == "sunday")
        {
          ME.sunday =this.thisDay
        }

      if (ME.modDat == "monday")
          {
            ME.monday=this.thisDay
          }


      if (ME.modDat == "tuesday")
            {
              ME.tuesday= this.thisDay ;
            }

      if (ME.modDat == "wednesday")
              {
                ME.wensday=this.thisDay ;
              }
              if (ME.modDat == "thursday")
                {
                  ME.thursday= this.thisDay ;
                }


            if (ME.modDat == "friday")
                  {
                    ME.friday=this.thisDay ;
                  }

            if (ME.modDat == "saturday")
                    {
                      ME.saturday=this.thisDay ;
                    }
          this.router.navigate(["/user"]);
    }
  add(temp:number){
    console.log(temp);
    this.thisDay.push(this.ME.myExercises[temp].name);
  }

  check(){
    console.log(this.temp+"  "+this.lastExercise );
    if (this.temp == this.lastExercise)
      {
        return;
      }
    else
      {
        console.log("pushing")
        this.lastExercise = this.temp;
        this.thisDay.push(this.temp);

      }

  }

  remove(temp:string){
    this.thisDay.splice( this.thisDay.lastIndexOf(temp), 1);
  }

}
