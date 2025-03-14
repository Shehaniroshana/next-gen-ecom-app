import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';
import { ProductListComponent } from "../product-list/product-list.component";
import { PostFooterProductComponent } from '../post-footer-product/post-footer-product.component';

@Component({
  selector: 'app-product',
  imports: [FooterComponent, CommonModule,PostFooterProductComponent,],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
 
}
