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
  id : number | undefined;
  product : ProductItem | undefined;
  constructor(private activatedRoute : ActivatedRoute, private productService : ProductService) {
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    })
     this.product = this.productService.getById(this.id);
    }
}
