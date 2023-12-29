import { Component } from '@angular/core';
import { Employee } from 'src/app/employee';
import { OrganizationService } from '../services/organization.service';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent {
  constructor(private organizationService: OrganizationService) {
  }

  selectedEmployee: Employee | undefined
  deleteModalOpen: boolean = false;




  toggleDeleteModal(thisEmployee?: Employee): void {
    this.deleteModalOpen = !this.deleteModalOpen
    this.selectedEmployee = thisEmployee


  }


}
