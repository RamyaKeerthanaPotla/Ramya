import { Exercise } from "./Exercise";
import { Http } from "@angular/http";
import { list } from "./profileList";
import {Observable} from 'rxjs';

export class Profile {
  tempList : list;
  constructor(n: string, ID: string, pic: string, private http:Http){
    this.name = n;
    this.id =ID;
    this.picture = pic;
    this.ngOnInit()

  }

  ngOnInit(){

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
  fbid: string="";
  exerciseList: Exercise[]=[];
  myExercises: Exercise[]=[new Exercise("Swimming"),new Exercise("Running"),new Exercise("Jummping Jacks"),new Exercise("Cycling"), new Exercise("Zumba"),new Exercise("Scrambling")];
  modDat:string="";
  friends: string[]=[];

  update(){

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
