import {Component, EventEmitter, Output} from '@angular/core';
import {ProductService} from "../product.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  searchText : string|undefined;
  constructor(private productService : ProductService) {}
  @Output() textChanged = new EventEmitter<string>();

  // @ts-ignore
  onTextChange() {
      this.textChanged.emit(this.searchText);
  }

}
