import { Component, OnInit } from '@angular/core';
import { BackendService, Product } from '../../Services/backend.service';
import { ToastService } from '../../Services/toast.service';
import { map, tap } from 'rxjs';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrl: './table.component.css',
})
export class TableComponent implements OnInit {
	products: Product[] = [];
	productsSize: number = 0;
	pageSize: number = 20;
	currentPage: number = 1;

	constructor(
		private backendService: BackendService,
		private toastService: ToastService,
	) {}

	ngOnInit(): void {
		this.loadItems();
	}

	trackProductBy(index: number, item: Product) {
		return item.productUId;
	}

	productAdded(product: Product) {
		this.products.push(product);

		/**
		 * I do not like this, because this is an unnecessary call to the backend.
		 * But because the add-product endpoint doesn't return the created object or its Uid
		 * the app can't edit or remove the new product unless there is a refresh to get its Uid.
		 * I don't want to generate the Uid client side as in a realistic scenario with multiple users,
		 * this might conflict with a newly created object on someone else's view.
		 */
		this.loadItems();
	}

	deleteProduct($event: number) {
		const deletedProduct = this.products.find(
			(product) => product.productUId === $event,
		);
		if (deletedProduct) {
			this.products.splice(this.products.indexOf(deletedProduct), 1);
			this.toastService.show({
				title: 'Success!',
				message: 'Deleted Product: ' + deletedProduct.productName,
				classname: 'bg-success text-light',
			});
		}
	}

	loadItems() {
		this.backendService
			.getProducts()
			.pipe(
				tap((val) => (this.productsSize = val.length)),
				map((products): Product[] => {
					return products.slice(
						(this.currentPage - 1) * this.pageSize,
						(this.currentPage - 1) * this.pageSize + this.pageSize,
					);
				}),
			)
			.subscribe((products: Product[]) => {
				this.products = products;
			});
	}
}
