import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'card-element';
  likeNotify(){
    console.log('liked.');
  }
  shareEvent(){
    console.log('shared.');
  }
  commentEvent(){
    console.log('commented.');
  }
}
