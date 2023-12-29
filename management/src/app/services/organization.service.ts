import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Organization } from '../organization'


@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor(private http: HttpClient) {
  }

  private myOrganization = 'http://localhost:7018/';


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);
      return of(result as T);
    };
  }


  getOrg(): Observable<Organization[]> {
    return this.http.get<Organization[]>(this.myOrganization)
      .pipe(
        catchError(this.handleError<Organization[]>('getOrg', []))
      );
  }

}
