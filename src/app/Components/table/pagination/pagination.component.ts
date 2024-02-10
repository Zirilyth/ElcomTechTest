import { Component, Input, OnInit, Output } from '@angular/core';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { Product } from '../../../Services/backend.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-pagination',
  standalone: true,
	imports: [
		NgbPagination,
		FormsModule
	],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {

	@Input() products:Product[] = []
	@Output() page = new Subject<number>();


	refreshTable(){

	}



}
