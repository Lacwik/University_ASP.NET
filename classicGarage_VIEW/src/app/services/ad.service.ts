import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ad } from '../models/ad';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdService {
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  private adsUrl = 'https://localhost:44378/api/ads';

  constructor(
    private http: HttpClient
  ) { }

  /** GET ads list */
  getAds (): Observable<Ad[]> {
    return this.http.get<Ad[]>(this.adsUrl)
    .pipe(
      catchError(this.handleError('getAds', []))
    );
  }

   /** GET Ad by id */
  getAd(id: number): Observable<Ad>{
    return this.http.get<Ad>(this.adsUrl + `${id}`)
    .pipe(
      catchError(this.handleError<Ad>('getAd id=${id}'))
    );
  }

}
