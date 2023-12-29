import { Injectable } from '@angular/core';
import { Field } from '../documents/fields';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  constructor(private http: HttpClient) {
  }

  private createDocumentUrl = 'http://localhost:7118';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);
      return of(result as T);
    };
  }

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
    this.fields.length = 0
  }

  createDocument(document: Object) {
    const url = `${this.createDocumentUrl}`
    return this.http.post(url, JSON.stringify(document));

  }

  log(something: any) {
    console.log(something)

  }

}
