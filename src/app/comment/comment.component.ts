import {Component, OnInit} from '@angular/core';
import {User} from "../model/User";
import {Product} from "../model/cart.model";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {ProductService} from "../product.service";
import {UserService} from "../user.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Comment} from "../model/Comment";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit{
  user : User | undefined;
  product : Product;
  reviewForm = new FormGroup({
    rating: new FormControl(''),
    name : new FormControl(''),
    details : new FormControl(''),
    title : new FormControl('')
  });

  constructor(private activatedRoute : ActivatedRoute,
              private router : Router,
              private productService : ProductService,
              private userService : UserService) {
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.productService.getProductById(id).subscribe((product) => {
        this.product = product;
      });
    });
    this.userService.user$.subscribe((_user) => this.user = _user);
}

  submit() {
    const name = this.reviewForm.value["name"];
    const details = this.reviewForm.value["details"];
    const title = this.reviewForm.value["title"];
    const rating = this.reviewForm.value["rating"];
    console.log(this.reviewForm);
    if (this.user && name && details && title && rating)
      this.productService.postReview(new Comment(this.user, this.product, name, details, title, +rating)).subscribe((response) => {
          this.router.navigate(['/products/' + this.product.id]);
      });
  }
}
