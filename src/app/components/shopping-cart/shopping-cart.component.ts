import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css',

  standalone: false
})
export class ShoppingCartComponent {
  @Input() cartItems: Product[] = [];
  @Output() removeItem = new EventEmitter<number>();
  @Output() clearCart = new EventEmitter<void>();

  onRemoveItem(index: number): void {
    this.removeItem.emit(index);
  }

  onClearCart(): void {
    this.clearCart.emit();
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }
}