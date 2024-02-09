import { Component, Input, OnDestroy, TemplateRef } from '@angular/core';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from '../../Services/toast.service';
import { ToastContainerComponent } from './toast-container/toast-container.component';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-toast',
  standalone: true,
	imports: [
		NgbTooltip,
		ToastContainerComponent,
		UpperCasePipe
	],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent implements OnDestroy{
	constructor(private toastService:ToastService) {
	}



	ngOnDestroy(): void {
		this.toastService.clear();
	}

}
