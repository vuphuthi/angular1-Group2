import {  OnInit } from '@angular/core';
import { Component, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})



export class HomePageComponent implements OnInit {
  foods: any=[];
  tag: any=[];

  constructor(private foodService: FoodService,private activatedRoute: ActivatedRoute) {
    let foodsObservalbe:Observable<Food[]>;
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        foodsObservalbe = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
      else if (params.tag)
        foodsObservalbe = this.foodService.getAllFoodsByTag(params.tag);
      else
        foodsObservalbe = foodService.getAll();

        foodsObservalbe.subscribe((serverFoods) => {
          this.foods = serverFoods;
        })
    })
  }

  ngOnInit(): void {
    this.foodService.getAll().subscribe((data:any)=>{
      this.foods = data.food.docs;
      console.log(data.food.docs);
      this.activatedRoute.paramMap.subscribe(params=>{
        this.tag = params.get('tags');
        console.log(this.tag);
      })
    })
  }
  getProductTags(id:any){
    this.foodService.getAll().subscribe((res)=>{
     this.foods = res ;
    })
 }
}
