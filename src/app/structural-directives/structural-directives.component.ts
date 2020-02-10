import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  template: `
  <h2>Structural Directives</h2>
              <p>
                There are three structural directives:
              </p>
              <ol>
                  <li>ngIf</li>
                  <li>ngSwitch</li>
                  <li>ngFor</li>
                </ol>
              <h2>ngIf</h2>
              <p>ngIf will conditionally show an DOM element based on whehter the statement is true or false.</p>
              <ol>
                <li> Write a html tag that contains *ngIf</li>
                <li>Provide a condition statement after the *ngIf</li>
                <li>To add an else statement, include an ng-template that contains an #id</li>
                <li>After the #ngIf statement add a ; else #id</li>
              </ol>
              <div *ngIf='isTrue; then thenBlock else elseBlock'></div>
              <ng-template #thenBlock>
                <h3>
                  This is a true statement.
                </h3>
              </ng-template> 
              <ng-template #elseBlock>
                <h3>
                  This is a false statement.
                </h3>
              </ng-template>
              <button (click)="changeStatement()">{{isTrue ? 'Show False' : 'Show True'}}</button>
              <h2>ngSwitch</h2>
              <p>You use ngSwitch when you are comparing multiple values</p>
              <ol>
                <li>Create a property to compare</li>
                <li>Create a div that will contain the divs that will be compared to</li>
                <li>Add [ngSwitch]='propertyname' in the initial div</li>
                <li>Foreach div inside the initial div add *ngSwitchCase="'case value'"</li>
                <li>If the switch case doesn't match any of the cases then make a div with ngSwitchDefault</li>
             </ol>
              <div [ngSwitch]="toy_color">
             <div *ngSwitchCase="'red'"style="color:red;"> RED </div>
             <div *ngSwitchCase="'blue'" style="color:blue;">  BLUE </div>
             <div *ngSwitchCase="'yellow'" style="color:yellow;"> YELLOW </div>
             <div *ngSwitchCase="'green'" style="color:green;"> GREEN </div>
             <div *ngSwitchCase="'orange'" style="color:orange;"> ORANGE</div>
             <div *ngSwitchCase="'purple'" style="color:purple;"> PURPLE</div>
             <div *ngSwitchDefault> Pick Again </div>
          </div>
          <label>Enter colorname:</label>
            <input [(ngModel)]='toy_color' type='text'>
            <h2>ngFor</h2>
            
                <div *ngFor="let ngcolor of ng_colors; index as i; first as f;last as l; odd as o; even as e" >index:{{i}} | isFirst:{{f}} | isLast:{{l}} | isEven:{{e}} | isOdd:{{o}} | {{ngcolor}}</div>           
            <hr>    

            `,
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent implements OnInit {

  constructor() { }
 public isTrue = true;
 public toy_color = "";
 public filter = "";
 public ng_colors =["red","green","blue","purple","yellow"];
 changeStatement(){
   let change= !this.isTrue;
   this.isTrue = change;
 }
 filterItems(event){
   this.filter = event.target.value;
   return this.filter;
 }
  ngOnInit() {
  }

}
