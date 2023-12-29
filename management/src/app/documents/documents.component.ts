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
  addModalDocName: boolean = false
  docName = ''
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

    if (this.name.length && this.type.length) {
      const newField: Field = { name: this.name, type: this.type };
      this.documentsService.addField(newField);
      this.name = '';
      this.type = '';
    }

  }

  removeField(index: number): void {
    this.documentsService.removeField(index)

  }

  clearFields(): void {
    this.documentsService.clearField()
  }

  next(): void {

    if (this.fields.length) {
      this.addModalDocName = !this.addModalDocName
    }
  }

  handleSubmit(): void {

    this.documentsService.createDocument({ docName: this.docName, fields: this.fields })
      .subscribe(
        (response) => {
          console.log('Document added successfully', response);
          this.toggleAddModal()
        },
        (error) => {
          console.error("Couldn't add document", error)
        }
      )
  }


}



