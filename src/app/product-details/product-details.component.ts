import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../product.service";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  product : any | undefined;
  mainImage : any | undefined;
  constructor(private route : ActivatedRoute, private productService : ProductService) {
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id : number = params['id'];
      this.productService.getProductById(id).subscribe((response) => {
        this.product = response;
        this.mainImage = this.product.thumbnail});
    })
    }

  setMainImage(image: Element) {
    this.mainImage = image;
  }

  protected readonly faPlus = faPlus;
  protected readonly faMinus = faMinus;
}
