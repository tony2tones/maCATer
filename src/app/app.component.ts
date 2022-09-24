import { Component, OnInit } from '@angular/core';
import { CatServiceService } from './cat-service.service';
import { cardArray } from './data/cat-data.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'matchercatcher';

  cardsArray:any;

  constructor(private catService: CatServiceService) {}

  ngOnInit() {
    this.catService.getCats().subscribe((data) => {
      console.log(data);
    })
    this.cardsArray = cardArray.sort(() => 0.5 - Math.random())
    console.log('what is dees', this.cardsArray);

  }

  public catShuffle() {
    this.ngOnInit();
  }
}
