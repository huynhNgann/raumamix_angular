import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product/product.service';
import { FoodService } from '../services/food/food.service';
import { Banner } from '../shared/models/banner';
import { Foods } from '../shared/models/food';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
