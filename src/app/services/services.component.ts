import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  template: `
              <h2>Service</h2>
              <p>A class with a purpose.</p>
              <ol>
                <li>Share data</li>
                <li>implement application logic</li>
                <li>External Interaction</li>
                <li>The naming convention is .service.ts</li>
              </ol>
              <h2>Dependency Injection</h2>
              <p>DI is a coding pattern in which a class receives its dependencies from external sources rather than creating them itself.</p>
                class Car() <br>
                      engine;<br>
                      tires;<br>
                      constructor(engine,tires)<br>
                            this.engine = engine;<br>
                            this.tires = tires;<br>
              var myEngine = new Engine(parameter);<br>
              var myTires = new Tires(parameter);<br>
              var myCar = new Car(myEngine,myTires);<br>

              <h2>How to create a service</h2>
              <ol>
                <li>Define the service class</li>
                <li>ng generate service serviceName</li>
                <li>Register the injector</li>
                <li>Go to AppModule, import serviceName and place in the providers array.</li>
                <li>Declare as dependency in the necessary components</li>
                <li>
                constructor(private _serviceName: ServiceName)
                    ngOnInit() 
                      this.property = this._serviceName.methodName();
                    
                </li>
              </ol>
              <h2>How to perform an HTTP request</h2>
              <ol>
                <li>Import HttpClientModule in app.module</li>
                <li>Go to your service and import HttpClient and add HttpClient to its constructor by 
                  typing (private http: HttpClient)</li>
                  <li>Create an interface that contains all of the fields for the data.</li>
                  <li>Subscribe the necesary components to the observable.</li>
              </ol>
              <hr>
            `,
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
