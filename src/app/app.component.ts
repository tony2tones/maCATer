import { Component, OnInit } from '@angular/core';
import { cardArray } from './data/cat-data.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'matchercatcher';

  cardsArray:any;

  ngOnInit() {
    this.cardsArray = cardArray.sort(() => 0.5 - Math.random())
    console.log('what is dees', this.cardsArray);

  }

  public catShuffle() {
    this.ngOnInit();
  }
}
