import { Injectable } from '@angular/core';
import { Field } from '../documents/fields';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  constructor() { }

  private fields: Field[] = []


  addField(field: Field) {
    this.fields.push(field)

  }

  removeField(index: number) {

    this.fields.splice(index, 1)
  }


  getFields() {
    return this.fields
  }

  clearField() {
    this.fields = []
  }


}
