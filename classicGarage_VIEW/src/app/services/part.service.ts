import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Part } from '../models/part';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PartService {
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  private partsUrl = 'https://localhost:44378/api/parts/';

  constructor(
    private http: HttpClient
  ) { }

  /** GET Parts list */
  getParts (): Observable<Part[]> {
    return this.http.get<Part[]>(this.partsUrl)
    .pipe(
      catchError(this.handleError('getParts', []))
    );
  }

   /** GET Part by id */
  getPart(id: number): Observable<Part>{
    return this.http.get<Part>(this.partsUrl + `${id}`)
    .pipe(
      catchError(this.handleError<Part>('getPart id=${id}'))
    );
  }

  /* ================================== Save methods ================================== */
 
  /** PUT: add a new Part to the server */
  putPart (repair: Part): Observable<Part> {
    return this.http.put<Part>(this.partsUrl, repair, httpOptions).pipe(
      catchError(this.handleError<Part>('putRepair'))
    );
  }

  /** POST: update the Repair on the server */
  postPart (repair: Part): Observable<any> {
    return this.http.post(this.partsUrl, repair, httpOptions).pipe(
      catchError(this.handleError<any>('postRepair'))
    );
  }
 
  /** DELETE: delete the Repair from the server */
  deletePart (repair: Part | number): Observable<Part> {
    const id = typeof repair === 'number' ? repair : repair.id;
    const url = `${this.partsUrl}/${id}`;
 
    return this.http.delete<Part>(url, httpOptions).pipe(
      catchError(this.handleError<Part>('deleteRepair'))
    );
  }
 


}
