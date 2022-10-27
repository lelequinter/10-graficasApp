import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private http: HttpClient) { }

  getUsersRedesSociales() {
    const url = 'http://localhost:3000/grafica'
    return this.http.get(url)
  }
}
