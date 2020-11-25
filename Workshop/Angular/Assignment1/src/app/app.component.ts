import { Component } from '@angular/core';


export class Actor {
  public name: string = '';
  public characterPlayed: string = '';
  public isHandsome: boolean = false;

  // constructor(name:string, characterPlayed:string,isHandsome:boolean){
  //     this.name = name; 
  //     this.characterPlayed = characterPlayed; 
  //     this.isHandsome = isHandsome; 
  // }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {
  title = 'Assignment1';
  message = 'Single Page Applications have become a way of website development'

  actor: Actor = new Actor();
  constructor() {
    this.actor.name = "Amrish Puri";
    this.actor.characterPlayed = "Mogambo";
    this.actor.isHandsome = true;
  }

  displayMessage(){
    alert("Welcome to the world of Angular JS 4");
  }
}
