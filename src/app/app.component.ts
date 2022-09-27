import { Component, OnInit } from '@angular/core';
import { CatServiceService } from './cat-service.service';
import { cardArray } from './data/cat-data.component';
import { Cat } from './models/cat.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'matchercatcher';
  localCatPayLoad:Cat[] = [];
  catPayload:Cat[] = [];
  cardsArray:any;

  constructor(private catService: CatServiceService) {}

  ngOnInit() {
    if(!this.localCatPayLoad && !this.localCatPayLoad.length) {
      console.log('IS THIS BEING CALLED RIGHT NOW???? ', this.localCatPayLoad);
      this.catCall();
    }
    console.log('this has been ran its all good and has passed')
  }

  public catShuffle() {
    this.localCatPayLoad = this.localCatPayLoad.sort(() => 0.5 - Math.random())
  }

  public catCall() {
    console.log('THIS HAS BEEN CALLED');
    this.catService.getCats().subscribe((data:Cat[]) => {
      console.log(data);
      this.catPayload = data;
      this.catPayload = this.catPayload.sort(() => 0.5 - Math.random())
      window.localStorage.setItem('catPayload', JSON.stringify(this.catPayload));
      let localstore = localStorage.getItem('catPayload');
      const obj = JSON.parse(localstore);
      console.log('IS IT IN HERE? ',obj);
      this.localCatPayLoad = obj;
    })
  }
}
