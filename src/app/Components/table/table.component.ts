import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from '../../Services/backend-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit{


    constructor(private backendService:BackendServiceService) {
    }
    ngOnInit(): void {
      this.backendService.getProducts().subscribe((r) => {
        console.log(r)
      })
    }





}
