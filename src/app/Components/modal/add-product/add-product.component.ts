import { Component, inject, Input, Output, TemplateRef } from '@angular/core';
import { BackendService, Product } from '../../../Services/backend.service';
import { Subject } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
	@Input() product: Product;
	@Output() productChange = new Subject<Product>();

	private modalService = inject(NgbModal);

	constructor(
		private backendService: BackendService
	) {
		this.product = {
			productUId: '',
			available: false,
			cartonQty: 0,
			manufactureCode: '',
			manufactureDescription: '',
			manufactureName: '',
			productCode: '',
			productDescription: '',
			productName: ''
		};
	}

	open(content: TemplateRef<any>) {
		this.modalService.open(content, {ariaLabelledBy: 'delete-product-modal'});
	}

	onSubmit(e:MouseEvent){

	}
}
