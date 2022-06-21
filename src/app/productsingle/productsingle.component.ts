import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';

@Component({
  selector: 'app-productsingle',
  templateUrl: './productsingle.component.html',
  styleUrls: ['./productsingle.component.css']
})
export class ProductsingleComponent implements OnInit {
  food!:Foods;
  foods:Foods[]=[];
  constructor(private activatedRoute: ActivatedRoute,
    private foodService:FoodService, private cartService:CartService,
    private route:Router) { 
      activatedRoute.params.subscribe(params => {
        if(params['id'])
        this.food=foodService.getFoodById(params['id']);
      })
    }
  ngOnInit(): void {
    this.foods=this.foodService.getAll();
  }
  addToCart(){
    this.cartService.addToCart(this.food);
    this.route.navigateByUrl('/cart');
  }

}
