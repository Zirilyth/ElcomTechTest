import { Component, inject, Input, Output, TemplateRef } from '@angular/core';
import { BackendService, Product } from '../../../Services/backend.service';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
	selector: 'app-delete-product',
	standalone: true,
	imports: [
		FormsModule,
		ReactiveFormsModule
	],
	templateUrl: './delete-product.component.html',
	styleUrl: './delete-product.component.css'
})
export class DeleteProductComponent {
	@Input() productID: number;

	@Output() productIDChange = new Subject<number>();

	private modalService = inject(NgbModal);

	constructor(
		private backendService: BackendService
	) {
		this.productID = 0
	}

	open(content: TemplateRef<any>) {
		this.modalService.open(content, {ariaLabelledBy: 'edit-product-modal'});

	}

	close() {
		this.modalService.dismissAll();
	}

	delete() {
		this.backendService.deleteProduct(this.productID).subscribe((response) => {
			this.productIDChange.next(this.productID)
			this.modalService.dismissAll()
		});
	}
}
