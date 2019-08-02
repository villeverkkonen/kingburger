import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'
import { Burger } from '../models/burger'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class BurgerService {

  baseUrl: string = '/api/burgers'

  constructor(
    private http: HttpClient
  ) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error)
      return of(result as T)
    }
  }

  getBurgers(): Observable<Burger[]> {
    return this.http.get<Burger[]>(this.baseUrl)
    .pipe(
      tap(_ => {}),
      catchError(this.handleError('getBurgers', []))
    )
  }

  getBurger(id: string): Observable<Burger> {
    return this.http.get<Burger>(`${this.baseUrl}/${id}`)
    .pipe(
      tap(_ => {}),
      catchError(this.handleError<Burger>('getBurger'))
    )
  }

  addBurger(burger): Observable<Burger> {
    return this.http.post<Burger>(this.baseUrl, burger, httpOptions)
    .pipe(
      tap(_ => {}),
      catchError(this.handleError<Burger>('addBurger'))
    )
  }

  vote(burger): Observable<Burger> {
    let updatedBurger = burger
    updatedBurger.votes = updatedBurger.votes + 1
    return this.http.put<Burger>(this.baseUrl + `/${updatedBurger.id}`, updatedBurger)
    .pipe(
      tap(_ => {}),
      catchError(this.handleError<Burger>('vote'))
    )
  }
}
