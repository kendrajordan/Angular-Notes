import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  template: `
  <h2>Pipes</h2>
  <p>Transforms data in the view. </p>
  <h3>{{name}}</h3>
  <h3>Lowercase pipe: {{name | lowercase}}</h3>
  <h3>Uppercase pipe: {{name | uppercase}}</h3>
  <h3>Titlecase pipe: {{message | titlecase}}</h3>  
  <h3> Slice Pipe 3:5: {{name | slice:3:5}}</h3>
  <h3> JSON Pipe : {{person | json}}</h3>
  <h2>Number Pipes</h2>
  <h3>{{5.678 | number:'1.2-3'}}</h3>
  <h3>{{5.678 | number:'3.4-5'}}</h3>
  <h3>{{5.678 | number:'3.1-2'}}</h3>
  
  <h3>{{0.25 | percent}}</h3>
  <h3>{{0.25 | currency}}</h3>
  <h3>{{0.25 | currency:'GBP'}}</h3>
  <h3>{{0.25 | currency:'GBP':'code'}}</h3>
  <h3>{{date}}</h3>
  <h3>{{date | date:'short'}}</h3>
  <h3>{{date | date:'shortDate'}}</h3>
  <h3>{{date | date:'shortTime'}}</h3>
  <h3>{{date | date:'medium'}}</h3>
  <h3>{{date | date:'mediumDate'}}</h3>
  <h3>{{date | date:'mediumTime'}}</h3>
  <hr>
  `,
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
public name = "Kendra Jordan";
public message = "welcome to kentucky";
public person = {
  "firstname": "John",
  "lastname":"Doe"
};
public date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
