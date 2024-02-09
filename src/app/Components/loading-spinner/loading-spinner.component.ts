import { Component } from '@angular/core';
import { LoadingService } from '../../Services/loading.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
	imports: [
		NgIf,
		AsyncPipe
	],
  templateUrl: './loading-spinner.component.html',
  styleUrl: './loading-spinner.component.css'
})
export class LoadingSpinnerComponent {

	isVisible:Subject<boolean> = this.loadingService.isLoading

	constructor(private loadingService:LoadingService) {
	}
}
