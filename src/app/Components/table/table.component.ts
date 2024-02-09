import { Component, OnInit } from '@angular/core';
import { BackendService, Product } from '../../Services/backend.service';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
	products: Product[] = [];


	constructor(private backendService: BackendService) {
	}

	ngOnInit(): void {
		this.backendService.getProducts().subscribe((products: Product[]) => {
			this.products = products;
		});
	}

	trackProductBy(index: any, item: Product) {
		return item.productUId;
	}


	productAdded(product: Product) {
		this.products.push(product);
	}

	deleteProduct($event: number) {
		let deletedProduct = this.products.find((product) => product.productUId === $event);
		if (deletedProduct) {
			this.products.splice(this.products.indexOf(deletedProduct),1);
		}
	}

}
