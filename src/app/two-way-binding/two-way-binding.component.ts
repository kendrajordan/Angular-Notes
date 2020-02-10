import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `
  <h2>Two-way binding</h2>
          <ol>
            <li>Add  and import FormsModule in appModule</li>
            <li>Create name property in the class.</li>
            <li>Create an input with [(ngModel)]="name"</li>
          </ol>
          <input [(ngModel)]="name" type="text">
          {{name}}
          <hr>
            `,
  styleUrls: ['./two-way-binding.component.scss']
})
export class TwoWayBindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public name = "";

}
