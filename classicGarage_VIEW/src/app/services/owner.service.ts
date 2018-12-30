import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Owner } from '../models/Owner';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  private ownersUrl = 'https://localhost:44378/api/owners/';

  constructor(
    private http: HttpClient
  ) { }

  /** GET owners list */
  getOwners (): Observable<Owner[]> {
    return this.http.get<Owner[]>(this.ownersUrl)
    .pipe(
      catchError(this.handleError('getOwners', []))
    );
  }

   /** GET Owner by id */
  getOwner(id: number): Observable<Owner>{
    return this.http.get<Owner>(this.ownersUrl + `${id}`)
    .pipe(
      catchError(this.handleError<Owner>('getOwner id=${id}'))
    );
  }

}
