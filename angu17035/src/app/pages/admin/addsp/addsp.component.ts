import { Component } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Food } from 'src/app/shared/models/food';
@Component({
  selector: 'app-addsp',
  templateUrl: './addsp.component.html',
  styleUrls: ['./addsp.component.css']
})
export class AddspComponent {
  title="Thêm Thực Phẩm"

  productForm = this.formBuilder.group({

      name: ['',[Validators.required, Validators.minLength(4)]],
      price: [0],
      des: ['',[Validators.required, Validators.minLength(4)]],
      imageUrl: [0],
      realPrice: [0],
      cookTime: ['',[Validators.required, Validators.minLength(4)]],
  })
  constructor(private foodService: FoodService, private formBuilder: FormBuilder ){

  }
  create(){
    const food: any = {
      name: this.productForm.value.name || "",
      price: this.productForm.value.price || 0,
      des: this.productForm.value.des || "",
      imageUrl: this.productForm.value.name || "",
      realPrice: this.productForm.value.realPrice || 0,
      cookTime: this.productForm.value.cookTime || "",

    }
    this.foodService.createFood(food).subscribe((product)=>{
      console.log('product',product)
      console.log(this.foodService.createFood(food));

    })
}

}
