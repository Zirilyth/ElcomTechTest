import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductComponent } from './edit-product.component';
import { AppModule } from '../../../app.module';

describe('EditProductComponent', () => {
	let component: EditProductComponent;
	let fixture: ComponentFixture<EditProductComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [AppModule]
		})
			.compileComponents();

		fixture = TestBed.createComponent(EditProductComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
