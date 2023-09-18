import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ProductCardComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {
  @Input() editedName: string;
  @Input() editedPrice: string;
  @Input() editedPict: string;

  @Input() product: {
    productName: string;
    productPrice: string;
    productPict: string;
  };
  @Output() removeId = new EventEmitter<number>();
  @Output() editCard = new EventEmitter<{cur: string[]; prev: string[]}>()
  currentValue: string[]
  prevValue: string[]

  removeCard() {
    this.removeId.emit();
  }

  ngOnChanges(changes: SimpleChanges): void {
    alert('First called is ngOnChanges')
    console.log('First called is ngOnChanges');
    console.log(changes);
    let cur, prev
    for(let change in changes) {
      let chng = changes[change];
      cur  += `${chng.currentValue}-`;
      prev += `${chng.previousValue}-`;
    }
    this.currentValue = cur.split('-')
    this.prevValue = prev.split('-')

  }

  editCards(){
    this.editCard.emit({cur: this.currentValue, prev: this.prevValue})
  }

  formatNumber(productPrice: string) {
    return parseFloat(productPrice).toLocaleString('id-ID');
  }

  constructor() {
    console.log('ProductCard Component CONSTRUCTOR');
  }

  ngOnDestroy(): void {
    alert('This card will be Removed')
    console.log('ProductCard Component REMOVED');

  }

  ngOnInit(): void {
    alert('after ngOnChanges is ngOnInit')
    console.log('after ngOnChanges is ngOnInit');
  }

  ngAfterViewInit(): void {
    alert('after ngOnInit is ngAfterViewInit')
    console.log('after ngOnInit is ngAfterViewInit');
  }
}
