import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from '../../Services/backend-service.service';

@Component({
  selector: 'app-table',
  standalone: true,
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit{


    constructor(private backendService:BackendServiceService) {
    }
    ngOnInit(): void {
      let r = this.backendService.getProducts()
      console.log(r)
    }





}
