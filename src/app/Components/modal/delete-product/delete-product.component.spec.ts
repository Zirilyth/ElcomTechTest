import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProductComponent } from './delete-product.component';
import { AppModule } from '../../../app.module';

describe('DeleteProductComponent', () => {
	let component: DeleteProductComponent;
	let fixture: ComponentFixture<DeleteProductComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [AppModule],
		}).compileComponents();

		fixture = TestBed.createComponent(DeleteProductComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
