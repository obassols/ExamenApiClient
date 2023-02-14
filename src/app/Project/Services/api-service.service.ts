import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getQuadres(limit: number, page: number): any {
    return this.http.get('https://api.artic.edu/api/v1/artworks?page=' + page + '&limit=' + limit);
  }
}
