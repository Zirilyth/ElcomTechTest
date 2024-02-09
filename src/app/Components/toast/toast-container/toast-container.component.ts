import { Component, inject } from '@angular/core';
import { ToastService } from '../../../Services/toast.service';
import { NgbToast } from '@ng-bootstrap/ng-bootstrap';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-toast-container',
  standalone: true,
	imports: [
		NgbToast,
		NgTemplateOutlet
	],
  templateUrl: './toast-container.component.html',
  styleUrl: './toast-container.component.css'
})
export class ToastContainerComponent {
	toastService = inject(ToastService);
}
