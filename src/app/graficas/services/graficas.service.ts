import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private http: HttpClient) { }

  getUsersRedesSociales() {
    const url = 'http://localhost:3000/grafica'
    return this.http.get(url)
  }

  getUsuariosRedesSocialesDonaData() {
    return this.getUsersRedesSociales()
      .pipe(
        map(data => {
          const labels = Object.keys(data);
          const values = Object.values(data);
          return { labels, values }
        })
      );
  }

}
