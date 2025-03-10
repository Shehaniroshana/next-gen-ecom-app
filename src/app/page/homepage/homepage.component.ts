import { Component } from '@angular/core';
import { CategoryComponent } from "../category/category.component";
import { ProductListComponent } from "../product-list/product-list.component";
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
  imports: [CategoryComponent,ProductListComponent]
})
export class HomepageComponent {

}
