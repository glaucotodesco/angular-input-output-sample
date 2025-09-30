import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class ProductListComponent implements OnInit {
  products$!: Observable<Product[]>;
  cartItems: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products$ = this.productService.getAll();
  }

  onProductBuy(product: Product): void {
    this.cartItems = [...this.cartItems, product];
  }

  onRemoveFromCart(productId: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
  }

  onClearCart(): void {
    this.cartItems = [];
  }
}