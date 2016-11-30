import { Component } from "@angular/core";
import { IProduct } from "./product";

@Component({
    selector: "pm-list",
    templateUrl: "product.component.html"
})
export class ProductComponent {
    imageHeight: number = 64;
    imageWidth: number = 64;
    listFilter: string;
    products: IProduct[] = [{
        "Id" : 1,
        "Name" : "Xbox One",
        "Description" : "Best entertainment device",
        "Price" : 200,
        "Ratings" : 3,
        "ImageUrl" : "https://openclipart.org/download/252626/xbox1s.svg"
    },{
       "Id" : 2,
        "Name" : "Playstation 4",
        "Description" : "Best gaming device",
        "Price" : 300,
        "Ratings" : 4,
        "ImageUrl" : "https://openclipart.org/download/26685/PanamaG-Playstation-1.svg" 
    }];

    delete(product:IProduct) {        
        console.log(product);
    }
}
