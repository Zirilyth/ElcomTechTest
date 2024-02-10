import { Component, inject, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BackendService, Product } from '../../../Services/backend.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { Subject } from 'rxjs';
import { ToastService } from '../../../Services/toast.service';

@Component({
	selector: 'app-edit-product',
	standalone: true,
	imports: [
		ReactiveFormsModule,
		NgClass
	],
	templateUrl: './edit-product.component.html',
	styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements OnInit {

	@Input() product: Product;

	@Output() productChange = new Subject<Product>();

	@Input() existingProduct:boolean = false;

	productForm = this.formBuilder.group({
			productCode: ['', Validators.compose([
					Validators.required,
					Validators.maxLength(100),
				]
			)],
			productName: ['', Validators.compose([
					Validators.required,
					Validators.maxLength(100),
				]
			)],
			productDescription: ['', Validators.compose([
					Validators.required,
					Validators.maxLength(100),
				]
			)],
			manufactureCode: ['', Validators.compose([
					Validators.required,
					Validators.maxLength(100),
				]
			)],
			manufactureName: ['', Validators.compose([
					Validators.required,
					Validators.maxLength(100),
				]
			)],
			manufactureDescription: ['', Validators.compose([
					Validators.required,
					Validators.maxLength(100),
				]
			)],
			cartonQty: ['', Validators.compose([
					Validators.required,
					Validators.pattern('^[0-9]+$')
				]
			)],
			available: ['']
		}
	);

	private modalService = inject(NgbModal);

	constructor(
		private formBuilder: FormBuilder,
		private backendService: BackendService,
		private toastService:ToastService
	) {
		this.product = {
			productUId: 0,
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

	get productCode() {
		return this.productForm.get('productCode');
	}

	get productName() {
		return this.productForm.get('productName');
	}

	get productDescription() {
		return this.productForm.get('productDescription');
	}

	get manufactureCode() {
		return this.productForm.get('manufactureCode');
	}

	get manufactureName() {
		return this.productForm.get('manufactureName');
	}

	get manufactureDescription() {
		return this.productForm.get('manufactureDescription');
	}

	get cartonQty() {
		return this.productForm.get('cartonQty');
	}

	get available() {
		return this.productForm.get('available');
	}

	ngOnInit(): void {
		if (this.product !== undefined && this.existingProduct) {
			this.productForm.patchValue({
				productCode: this.product.productCode,
				productName: this.product.productName,
				productDescription: this.product.productDescription,
				manufactureCode: this.product.manufactureCode,
				manufactureName: this.product.manufactureName,
				manufactureDescription: this.product.manufactureDescription,
				cartonQty: this.product.cartonQty.toString(),
				available: this.product.available.toString(),
			});
		}
	}

	onSubmit(e: MouseEvent) {
		let product: Product = {
			available: !!this.productForm.value.available,
			cartonQty: +this.productForm.value.cartonQty!,
			manufactureCode: this.productForm.value.manufactureCode!,
			manufactureDescription: this.productForm.value.manufactureDescription!,
			manufactureName: this.productForm.value.manufactureName!,
			productCode: this.productForm.value.productCode!,
			productDescription: this.productForm.value.productDescription!,
			productName: this.productForm.value.productName!,
			productUId: this.product?.productUId!
		};


		if(this.existingProduct){
			this.backendService.editProduct(product).subscribe((response) => {

				this.productChange.next(product);
				this.modalService.dismissAll();
				this.toastService.show({
					title: 'Success!',
					message: 'Updated Product: ' + product.productName,
					classname: 'bg-success text-light'
				});
			});
		}else{
			this.backendService.addProduct(product).subscribe((response) =>{
				this.productChange.next(product)
				this.modalService.dismissAll();
				this.toastService.show({
					title: 'Success!',
					message: 'Added Product: ' + product.productName,
					classname: 'bg-success text-light'
				});

			})
		}

	}

	open(content: TemplateRef<any>) {
		this.modalService.open(content, {ariaLabelledBy: 'edit-product-modal'});
	}


}
