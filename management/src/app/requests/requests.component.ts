import { Component } from '@angular/core';
import { Employee } from 'src/app/employee';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent {
  selectedEmployee: Employee | undefined
  deleteModalOpen: boolean = false;


  toggleDeleteModal(thisEmployee?: Employee): void {
    this.deleteModalOpen = !this.deleteModalOpen
    this.selectedEmployee = thisEmployee

  }

}
