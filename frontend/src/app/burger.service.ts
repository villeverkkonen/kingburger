import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

interface Burger {
  _id: string
  name: string
  ingredients: []
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class BurgerService {

  baseUrl: string = 'http://localhost:3001/api/burgers'

  constructor( private http: HttpClient ) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

  getBurgers(): Observable<Burger[]> {
    return this.http.get<Burger[]>(this.baseUrl)
    .pipe(
      tap(burgers => console.log('fetched burgers')),
      catchError(this.handleError('getBurgers', []))
    )
  }

  addBurger(burger): Observable<Burger> {
    return this.http.post<Burger>(this.baseUrl, burger, httpOptions)
    .pipe(
      tap((burger: Burger) => console.log(`added burger w/ id=${burger._id}`)),
        catchError(this.handleError<Burger>('addProduct'))
    )
  }
}
