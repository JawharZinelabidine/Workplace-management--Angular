import { Component } from '@angular/core';
import { DocumentsService } from '../services/documents.service';
import { Field } from './fields';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent {

  addModalOpen: boolean = true;
  name = ''
  type = ''
  fields: Field[] = []

  constructor(private documentsService: DocumentsService) {
    this.fields = this.documentsService.getFields();
  }


  toggleAddModal(): void {
    this.addModalOpen = !this.addModalOpen

  }

  addField(): void {
    const newField: Field = { name: this.name, type: this.type };
    this.documentsService.addField(newField);
    console.log(newField)

    this.name = ''; // Reset input values
    this.type = ''; // Reset input values
  }

  removeField(index: number): void {
    this.documentsService.removeField(index)

  }


}



