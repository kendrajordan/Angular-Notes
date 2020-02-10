import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-child-component',
  template: `
            <h2>Parent-> Child component interaction</h2>
            <ol>
              <li>Create a property in the parent component</li>
              <li>Go to the parent component's html and find the selector of the child component. Then in the child component's selector add a bounded property with the property you created in the parent component class. Ex: [attribute]='property' </li>
              <li> Create the same property in the child component's class and add @include() infront of the property Ex: @include() public property;</li>
              <li> Import Input from '@angular/core'</li>
              <li>Use the property in your child component</li>
            </ol>
              <h2>{{"Hello " + name}}</h2>

              <h2>Child->Parent component interation</h2>
              <ol>
                <li>import Output and EventEmitter from '@angular/core'</li>
                <li>Create an output eventemitter in the child component.<br> Ex:@Output() public childEvent = new EventEmitter();</li>
                <li>Create a function in the the child component's html and class</li>
                <li>Emit the your data from the child component class.</li>
                <li>Go to the parent component html to capture what was emitted from the child component<br>
                (childEvent)="message=$event</li>
                <li>Create the property in the parent component class</li>
                <li>Use the property in the parent component.</li>
              </ol>
              <button (click)="fireEvent()">message to parent</button>
              <hr>
            `,
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnInit {

  constructor() { }
//@Input() public parentData;
  @Input('parentData') public name:string;

  @Output() public childEvent = new EventEmitter();
  ngOnInit() {
  }
  fireEvent(){
    this.childEvent.emit('Hey Parent Component. This is the child component');
  }
}
