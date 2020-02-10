import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>template variable binding</h2>
  <ol>
    <li>Create an input tag that contains a variable that starts with a #. Ex: #variable</li>
    <li>To access the variable's value, write #variable.value</li>
  </ol>
   <input #myInput type="text">
   <button (click)="logInput(myInput.value)">Log</button>
   {{myInput.value}}
   <hr>
  `,
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  //template variable binding
 logInput(value){
  console.log(value);
  
 }
}
