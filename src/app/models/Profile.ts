import { Exercise } from "./Exercise";
import { Http } from "@angular/http";
import { list } from "./profileList";
import {Observable} from 'rxjs';
export class Profile {
  tempList : list;
  constructor(n: string, ID: string, pic: string, private http:Http) {
    this.name = n;
    this.id = ID;
    this.picture = pic;
    this.ngOnInit()
  }
  ngOnInit() {
//    console.log("in on init")
//   this.http.get("http://localhost:3001/exercises/list").subscribe(data =>{
//    this.temp = data.json();

//   });
//   if (this.temp){
//   this.temp.forEach(element => {
//     console.log(element);
//     this.myExercises.push(new Exercise(element));
//   });
//  }
//  this.users = new list ().allProfiles;
//   setInterval(()=> this.update(), 1000)
// not working

  }  
  users:Profile[]=[];;
  temp :string[]=[];;
  sunday: string []=[];;
  monday: string[]=[];;
  tuesday:string []=[];;
  wensday: string []=[];;
  thursday: string []=[];;
  friday: string[]=[];
  saturday : string []=[];
  id: string="";
  picture: string="";
  name: string="";
  exerciseList: Exercise[]=[];
  myExercises: Exercise[]=[new Exercise("Swimming"),new Exercise("Running"),new Exercise("Jummping Jacks"),];
  modDat:string="";
  friends: string[]=[];
  update()
  {


  }
}

export class Image {
  id: string;
  src: string;
  link: string;
}

export class Room {
  players: Profile[] = [];
}
