import { TestBed } from '@angular/core/testing';
import { BackendService, Product } from './backend.service';
import {
	HttpClientTestingModule,
	HttpTestingController,
} from '@angular/common/http/testing';

describe('BackendServiceService', () => {
	let service: BackendService;
	let controller: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
		});
		service = TestBed.inject(BackendService);
		controller = TestBed.inject(HttpTestingController);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
	it('can call get a list of products', () => {
		const expectedUrl = '/CRUDExample/get-products';
		const expectedProducts: Product[] = [
			{
				productUId: 3,
				productCode: 'BA01',
				productName: 'Bath Board',
				productDescription: 'Bath Board',
				manufactureCode: 'BB01',
				manufactureName: 'Bath Board 1',
				manufactureDescription: 'Bath Board 1',
				cartonQty: 15,
				available: true,
			},
			{
				productUId: 6,
				productCode: 'test6',
				productName: 'test6',
				productDescription: 'test6',
				manufactureCode: 'test6',
				manufactureName: 'test6',
				manufactureDescription: 'test6',
				cartonQty: 111,
				available: true,
			},
		];

		let actualProducts: Product[] | undefined;
		service.getProducts().subscribe((res) => {
			actualProducts = res;
		});
		const request = controller.expectOne(expectedUrl);

		request.flush(expectedProducts);
		expect(actualProducts).toEqual(expectedProducts);
		controller.verify();
	});
	it('can add a product', () => {
		const expectedUrl = '/CRUDExample/add-product';
		const testProduct: Product = {
			available: true,
			cartonQty: 5,
			manufactureCode: 'a',
			manufactureDescription: 'a',
			manufactureName: 'a',
			productCode: 'a',
			productDescription: 'a',
			productUId: 0,
			productName: 'a',
		};
		let actualResponse: unknown;
		service.addProduct(testProduct).subscribe((res) => {
			actualResponse = res;
		});
		const request = controller.expectOne(expectedUrl);

		request.flush(true);

		expect(actualResponse).toBe(true);
	});
	it('can delete a product', () => {
		const testID = 1;
		let actualResponse: unknown;
		service.deleteProduct(testID).subscribe((res) => {
			actualResponse = res;
		});
		const response = controller.expectOne(
			'/CRUDExample/remove-product?ProductUId=' + testID,
		);
		response.flush(true);
		expect(actualResponse).toBe(true);
	});
	it('can edit a product', () => {
		const testProduct: Product = {
			available: true,
			cartonQty: 5,
			manufactureCode: 'a',
			manufactureDescription: 'a',
			manufactureName: 'a',
			productCode: 'a',
			productDescription: 'a',
			productUId: 1,
			productName: 'a',
		};
		let actualResponse: unknown;
		service.editProduct(testProduct).subscribe((res) => {
			actualResponse = res;
		});
		const response = controller.expectOne('/CRUDExample/edit-product');
		response.flush(true);
		expect(actualResponse).toBe(true);
	});
});
