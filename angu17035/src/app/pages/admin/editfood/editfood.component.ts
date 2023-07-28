import { Component } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Food } from 'src/app/shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editfood',
  templateUrl: './editfood.component.html',
  styleUrls: ['./editfood.component.css']
})
export class EditfoodComponent {
  food!: Food;
  productForm = this.formBuilder.group({

    name: ['',[Validators.required, Validators.minLength(4)]],
    price: [0],
    des: ['',[Validators.required, Validators.minLength(4)]],
    imageUrl: [],
    realPrice: [0],
    cookTime: ['',[Validators.required, Validators.minLength(4)]],
})
constructor(private foodService: FoodService, private formBuilder: FormBuilder, private router: ActivatedRoute, ){
this.router.paramMap.subscribe((params)=>{
  const id = Number(params.get('id'));
  this.foodService.getFood(id).subscribe(data=>{
    this.food = data;
    this.productForm.patchValue({
        name: data.name,
        price: data.price,
        des: data.des,
        imageUrl: data.imageUrl,
        realPrice: data.realPrice,
        cookTime: data.cookTime,
    })
  }
  )
})
}
edit(){
  if(this.productForm.valid){
    const food: any = {
      name: this.productForm.value.name || "",
      price: this.productForm.value.price || 0,
      des: this.productForm.value.des || "",
      imageUrl: this.productForm.value.name || "",
      realPrice: this.productForm.value.realPrice || 0,
      cookTime: this.productForm.value.cookTime || "",

    }
    this.foodService.editFood(food).subscribe((product)=>{
      console.log('product',product)
      console.log(this.foodService.createFood(food));

  }


  )}
}
}

