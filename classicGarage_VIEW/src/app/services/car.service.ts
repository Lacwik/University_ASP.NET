import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Car } from '../models/Car';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  private carsUrl = 'https://localhost:44378/api/cars/';

  constructor(
    private http: HttpClient
  ) { }

  /** GET cars list */
  getCars (): Observable<Car[]> {
    return this.http.get<Car[]>(this.carsUrl)
    .pipe(
      catchError(this.handleError('getCars', []))
    );
  }

   /** GET Car by id */
  getCar(id: number): Observable<Car>{
    return this.http.get<Car>(this.carsUrl + `${id}`)
    .pipe(
      catchError(this.handleError<Car>('getCar id=${id}'))
    );
  }

  /* ================================== Save methods ================================== */
 
  /** PUT: add a new car to the server */
  putCar (car: Car): Observable<Car> {
    return this.http.put<Car>(this.carsUrl, car, httpOptions).pipe(
      catchError(this.handleError<Car>('putCar'))
    );
  }

  /** POST: update the car on the server */
  postCar (car: Car): Observable<any> {
    return this.http.post(this.carsUrl, car, httpOptions).pipe(
      catchError(this.handleError<any>('postCar'))
    );
  }
 
  /** DELETE: delete the car from the server */
  deleteCar (car: Car | number): Observable<Car> {
    const id = typeof car === 'number' ? car : car.id;
    const url = `${this.carsUrl}/${id}`;
 
    return this.http.delete<Car>(url, httpOptions).pipe(
      catchError(this.handleError<Car>('deleteCar'))
    );
  }
 


}
