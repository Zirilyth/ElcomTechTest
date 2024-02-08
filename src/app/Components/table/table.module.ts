import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { EditProductComponent } from '../modal/edit-product/edit-product.component';


@NgModule({
	declarations: [TableComponent],
	imports: [
		CommonModule,
		EditProductComponent
	],
	exports: [TableComponent]
})
export class TableModule {
}
