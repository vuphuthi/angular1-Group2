import { Injectable } from '@angular/core';
import { Food } from '../shared/models/food';
import { foods, Tags } from 'src/data';
import { Tag } from '../shared/models/tags';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {BASE_URL, FOODS_BY_ID_URL, FOODS_BY_SEARCH_URL, FOODS_TAGS_URL, FOODS_URL, FOODS_BY_TAG_URL } from '../shared/constants/url';

@Injectable({
  providedIn: 'root'
})

export class FoodService {
  API_URL: string = 'http://localhost:8080/api/foods'
  baseApiUrl = "https://file.io"
  constructor(private http:HttpClient) {

  }
  upload(file:any):Observable<any> {
    const formData = new FormData();
    formData.append("file", file, file.name);
    return this.http.post(this.baseApiUrl, formData)
  }
  createFood(food:Food){
    return this.http.post(`http://localhost:8080/api/foods`, food,{
      headers:{
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      }
    })
  }



  getAll(): Observable<Food[]> {
    return this.http.get<Food[]>(FOODS_URL);
  }

  getAllFoodsBySearchTerm(searchTerm: string) {
    return this.http.get<Food[]>(FOODS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(FOODS_TAGS_URL);
  }

  getAllFoodsByTag(tag: string): Observable<Food[]> {
    return tag === "All" ?
      this.getAll() :
      this.http.get<Food[]>(FOODS_BY_TAG_URL + tag);
  }

  getFoodById(foodId:string):Observable<Food>{
    return this.http.get<Food>(FOODS_BY_ID_URL + foodId);
  }
  getFood(id:number): Observable<Food>{
    return this.http.get<Food>(`${this.API_URL}/${id}`)
  }
  editFood(food:Food): Observable<Food>{
    return this.http.patch<Food>(`${this.API_URL}/${food.id}`, food)
  }
  deleteFood(id:any): Observable<Food>{
    return this.http.delete<Food>(`${this.API_URL}/${id}`,{
      headers:{
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      }
    })
  }
  }


