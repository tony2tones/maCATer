import { Component } from '@angular/core';
import { cardArray } from './data/cat-data.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'matchercatcher';

  cardsArray = cardArray;

  
}
