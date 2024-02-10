import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { EditProductComponent } from '../modal/edit-product/edit-product.component';
import { DeleteProductComponent } from '../modal/delete-product/delete-product.component';
import { PaginationComponent } from './pagination/pagination.component';
import { FormsModule } from '@angular/forms';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
	declarations: [TableComponent],
	imports: [
		CommonModule,
		EditProductComponent,
		DeleteProductComponent,
		PaginationComponent,
		FormsModule,
		NgbPagination
	],
	exports: [TableComponent]
})
export class TableModule {
}
