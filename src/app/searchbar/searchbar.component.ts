import {Component, EventEmitter, Output} from '@angular/core';
import {ProductService} from "../product.service";

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  searchText = "";
  selectedCategory = "All";
  categories : Array<string> | undefined;
  constructor(private productService : ProductService) {
  }
  ngOnInit(): void {
    this.productService.getCategories().subscribe((response) => this.categories = response);
  }

  @Output() textChanged = new EventEmitter<{searchText : string, category : string}>();
  onTextChange() {
    this.textChanged.emit({searchText : this.searchText, category : this.selectedCategory});
  }
  @Output() categoryChanged = new EventEmitter<string>();
  onCategoryChange() {
    this.categoryChanged.emit(this.selectedCategory);
    this.searchText = "";
  }
}
