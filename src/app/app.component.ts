import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tutorial';
  users=[
    {id:11,name:'Rishin'},
    {id:22,name:'Deblina'},
    {id:33,name:'Oindrila'},
    {id:44,name:'Twisha'}
  ];

  em=[];
  type:number=10;

  v:number=10;
}
