import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularParameterisedPipe';
  dob=new Date(1990,5,29);
  salary=10000000
}
