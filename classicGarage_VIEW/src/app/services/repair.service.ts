import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Repair } from '../models/repair';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RepairService {
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  private repairsUrl = 'https://localhost:44378/api/repairs/';

  constructor(
    private http: HttpClient
  ) { }

  /** GET Repairs list */
  getRepairs (): Observable<Repair[]> {
    return this.http.get<Repair[]>(this.repairsUrl)
    .pipe(
      catchError(this.handleError('getRepairs', []))
    );
  }

   /** GET Repair by id */
  getRepair(id: number): Observable<Repair>{
    return this.http.get<Repair>(this.repairsUrl + `${id}`)
    .pipe(
      catchError(this.handleError<Repair>('getRepair id=${id}'))
    );
  }

  /* ================================== Save methods ================================== */
 
  /** PUT: add a new Repair to the server */
  putRepair (repair: Repair): Observable<Repair> {
    return this.http.put<Repair>(this.repairsUrl, repair, httpOptions).pipe(
      catchError(this.handleError<Repair>('putRepair'))
    );
  }

  /** POST: update the Repair on the server */
  postRepair (repair: Repair): Observable<any> {
    return this.http.post(this.repairsUrl, repair, httpOptions).pipe(
      catchError(this.handleError<any>('postRepair'))
    );
  }
 
  /** DELETE: delete the Repair from the server */
  deleteRepair (repair: Repair | number): Observable<Repair> {
    const id = typeof repair === 'number' ? repair : repair.id;
    const url = `${this.repairsUrl}/${id}`;
 
    return this.http.delete<Repair>(url, httpOptions).pipe(
      catchError(this.handleError<Repair>('deleteRepair'))
    );
  }
 


}
