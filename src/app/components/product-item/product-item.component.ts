import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class ProductItemComponent {
  @Input({ required: true }) product!: Product;
  @Output() buy = new EventEmitter<Product>();

  onBuy(): void {
    this.buy.emit(this.product);
  }
}