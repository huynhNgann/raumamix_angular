import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Banner } from '../shared/models/banner';
import { Foods } from '../shared/models/food';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  foods:Foods[]=[];
  banner:Banner[]=[];
  constructor(private fs:FoodService) {}
    foodData:any;
     ngOnInit(): void {
      this.foods=this.fs.getAll();
      //
      this.banner=this.fs.getBanner();
  }

}
