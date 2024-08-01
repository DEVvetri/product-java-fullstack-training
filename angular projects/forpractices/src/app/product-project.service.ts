import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
export interface Product {

  productImage:string;
  productName: string;
  productContent: string;
  productPrice: number;
  productId: number;
  productRating: number;
  productCategory: string;
}

@Injectable({
  providedIn: 'root'
})



export class ProductProjectService {

  constructor(private httpClient:HttpClient){

  }
  myApi:string='http://localhost:3000/data';
  project:Product[]|any=[];

  getAllProducts():Observable<any>{
   return this.httpClient.get<Product[]>(this.myApi).pipe(map(data=>data))
  }
  getProduct(id:string):Observable<any>{
    return this.httpClient.get<Product>(this.myApi+`/${id}`)
  }
  addNewProdut(newProduct:Product):Observable<any>{
     return this.httpClient.post(this.myApi,newProduct);
  }
  updateProduct(id:string,data:any):Observable<any>{
    return this.httpClient.put(this.myApi+`/${id}`,data)
  }
  deleteProduct(id:string){
    return this.httpClient.delete(this.myApi+`/${id}`).subscribe();
  }
  name:any;
  public mycart: Product[]=[]
 public products: Product[] = [
  {
    productImage:"https://m.media-amazon.com/images/I/71IWpMTGrCL._AC_UY327_FMwebp_QL65_.jpg",
    productName: "Laptop Pro X1",
    productContent: "Ultra-thin, lightweight laptop with a powerful Intel Core i7 processor.",
    productPrice: 99,
    productId: 0,
    productRating: 4,
    productCategory: "Electronics",
  },
  {
    productImage:"https://m.media-amazon.com/images/I/610pMwN1z6L._AC_UL480_FMwebp_QL65_.jpg",
    productName: "GLG Gaming F34",
    productContent: "Single-origin beans from a sustainable farm in Colombia.",
    productPrice: 99,
    productId: 1,
    productRating: 2,
    productCategory: "Laptops",
  },
  {
    productImage:"https://m.media-amazon.com/images/I/71WChkpECLL._AC_UY327_FMwebp_QL65_.jpg",
    productName: "ASUS ROG",
    productContent: "Waterproof fitness band with heart rate monitoring and sleep tracking.",
    productPrice: 49,
    productId:2,
    productRating: 4,
    productCategory: "Laptops",
  },
  {
    productImage:"https://m.media-amazon.com/images/I/7124KU8m7gL._AC_UY327_FMwebp_QL65_.jpg",
    productName: "ASUS Vivobook Pro 15",
    productContent: "MSI Thin 15 Intel Core i5 12th Gen 12450H - (16 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce RTX 3050) Thin 15 B12UC-1692IN Gaming Laptop  (15.6 Inch, Cosmos Gray, 1.86 Kg)",
    productPrice: 49,
    productId:3,
    productRating: 4,
    productCategory: "Laptops",
  },
  {
    productImage:"https://rukminim2.flixcart.com/image/312/312/xif0q/computer/x/2/y/thin-15-b12uc-1690in-gaming-laptop-msi-original-imagz4b4a5qmhqzt.jpeg?q=70",
    productName: "ASUS TUF 15",
    productContent: "MSI Thin 15 Intel Core i5 12th Gen 12450H - (16 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce RTX 3050) Thin 15 B12UC-1692IN Gaming Laptop  (15.6 Inch, Cosmos Gray, 1.86 Kg)",
    productPrice: 69,
    productId:4,
    productRating: 4.2,
    productCategory: "Laptops",
  },

  {
    productImage:"https://m.media-amazon.com/images/I/71JQ3kUrR9L._AC_UY327_FMwebp_QL65_.jpg",
    productName: "Samsung 80 cm(32 inches)",
    productContent: "Waterproof fitness band with heart rate monitoring and sleep tracking.",
    productPrice: 133,
    productId:5,
    productRating: 1,
    productCategory: "TV",
  },
  {
    productImage:"https://m.media-amazon.com/images/I/81u+lUSZRDL._AC_UY327_FMwebp_QL65_.jpg",
    productName: "MI 80 cm (32 inches)",
    productContent: "Waterproof fitness band with heart rate monitoring and sleep tracking.",
    productPrice: 13,
    productId:6,
    productRating: 5,
    productCategory: "TV",
  },

  {
    productImage:"https://m.media-amazon.com/images/I/71MwDnn-ZaL._AC_UY327_FMwebp_QL65_.jpg",
    productName: "Samsung 80 cm(32 inches)",
    productContent: "Waterproof fitness band with heart rate monitoring and sleep tracking.",
    productPrice: 133,
    productId:7,
    productRating: 4,
    productCategory: "TV",
  },

  {
    productImage:"https://m.media-amazon.com/images/I/71JQ3kUrR9L._AC_UY327_FMwebp_QL65_.jpg",
    productName: "Redmi 80 cm (32 inches) F",
    productContent: "Waterproof fitness band with heart rate monitoring and sleep tracking.",
    productPrice: 33,
    productId:8,
    productRating: 2,
    productCategory: "TV",
  },

  {
    productImage:"https://m.media-amazon.com/images/I/71G5lf8y9OL._AC_UY327_FMwebp_QL65_.jpg",
    productName: "Sony 139 cm (55 inches) ",
    productContent: "Waterproof fitness band with heart rate monitoring and sleep tracking.",
    productPrice: 133,
    productId:9,
    productRating: 3,
    productCategory: "TV",
  },
  {
    productImage:"https://m.media-amazon.com/images/I/51ljnEaW0pL._AC_UY327_FMwebp_QL65_.jpg",
    productName: "Sony 139 cm (55 inches) ",
    productContent: "Waterproof fitness band with heart rate monitoring and sleep tracking.",
    productPrice: 19,
    productId:10,
    productRating: 2,
    productCategory: "TV",
  },
  {
    productImage:"https://m.media-amazon.com/images/I/41lHL5XiiDL._AC_UY327_FMwebp_QL65_.jpg",
    productName: "Sony 139 cm (55 inches) ",
    productContent: "Waterproof fitness band with heart rate monitoring and sleep tracking.",
    productPrice: 133.99,
    productId:11,
    productRating: 4,
    productCategory: "TV",
  },
  ];



}
