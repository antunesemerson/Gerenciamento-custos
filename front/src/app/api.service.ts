import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://127.0.0.1:8000/';
  token = 'Token 4df79f120841a97584288e79c767961e4f2b4eb5';
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Authorization', this.token);

  constructor(private http: HttpClient) { }

  getAllCustos(): Observable<any> {
    return this.http.get(this.baseUrl + 'custos/',
    {headers: this.httpHeaders});
  }

  getCusto(id): Observable<any> {
    return this.http.get(this.baseUrl + 'custos/' + id + '/',
    {headers: this.httpHeaders});
  }

  saveNewCusto(custo): Observable<any> {
    return this.http.post(this.baseUrl + 'custos/', custo,
    {headers: this.httpHeaders});
  }

  editCusto(custo): Observable<any> {
    return this.http.put(this.baseUrl + 'custos/' + custo.id + '/', custo,
    {headers: this.httpHeaders});
  }

  deleteCusto(id): Observable<any> {
    return this.http.delete(this.baseUrl + 'custos/' + id + '/',
    {headers: this.httpHeaders});
  }

}
