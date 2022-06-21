import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Banner } from '../shared/models/banner';
import { Foods } from '../shared/models/food';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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
