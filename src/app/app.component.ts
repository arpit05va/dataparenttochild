import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Send Data Child to parent Component';
  name: string = "Arpit";
  updateChild() {
    this.name = "Shreyansh";
  }
}
