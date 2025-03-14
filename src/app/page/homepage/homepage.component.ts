import { Component } from '@angular/core';
import { CategoryComponent } from "../category/category.component";
import { ProductListComponent } from "../product-list/product-list.component";
import { PostFooterComponent } from "../post-footer/post-footer.component";
import { FooterComponent } from "../footer/footer.component";
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
  imports: [CategoryComponent, ProductListComponent, PostFooterComponent, FooterComponent]
})
export class HomepageComponent {

}
