import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  searchText : string|undefined;

  // @ts-ignore
  onTextChange(value) {
    this.products = this.productService.getProductBySearchText(value).subscribe((response) => {this.products = response.products});
  }

}
