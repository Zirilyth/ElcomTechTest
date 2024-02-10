import { TestBed } from '@angular/core/testing';
import { BackendService } from './backend.service';
import { AppModule } from '../app.module';

describe('BackendServiceService', () => {
	let service: BackendService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports:[AppModule]
		}
		);
		service = TestBed.inject(BackendService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
