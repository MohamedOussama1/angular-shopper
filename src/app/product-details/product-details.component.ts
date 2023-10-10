import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductItem} from "../model/ProductItem";
import {ProductService} from "../product.service";


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  product : any | undefined;
  constructor(private route : ActivatedRoute, private productService : ProductService) {
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id : number = params['id'];
      this.productService.getProductById(id).subscribe((response) => { this.product = response});
    })
    }
}
